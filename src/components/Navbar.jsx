import { useState, useContext } from "react";
import { Link, NavLink } from "react-router";
import { FiLogOut } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import { AuthContext } from "./Contexts/AuthContext";
import { FaBookOpenReader } from "react-icons/fa6";
import userIcon from "../assets/user.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-semibold underline"
            : "hover:text-orange-500"
        }
        onClick={() => setIsMenuOpen(false)}
      >
        Home
      </NavLink>
      <NavLink
        to="/all-recipes"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-semibold underline"
            : "hover:text-orange-500"
        }
        onClick={() => setIsMenuOpen(false)}
      >
        All Recipes
      </NavLink>
      <NavLink
        to="/About"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-semibold underline"
            : "hover:text-orange-500"
        }
        onClick={() => setIsMenuOpen(false)}
      >
        About Us
      </NavLink>
      <NavLink
        to="/Contact"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-semibold underline"
            : "hover:text-orange-500"
        }
        onClick={() => setIsMenuOpen(false)}
      >
        Contact
      </NavLink>

      {/*  Show these links only when user is logged in */}
      {user && (
        <>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold underline"
                : "hover:text-orange-500"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </NavLink>
        </>
      )}
      <NavLink
        to="/register"
        className={({ isActive }) =>
          (isActive
            ? "text-orange-500 font-semibold underline"
            : "hover:text-orange-500") + " block md:hidden"
        }
        onClick={() => setIsMenuOpen(false)}
      >
        Register
      </NavLink>
    </>
  );

  return (
    <header className="bg-orange-100 text-base-content shadow-[0_4px_12px_rgba(0,0,0,0.08)] sticky top-0 z-50 border-b border-base-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left section: Menu icon + Logo */}
        <div className="flex items-center gap-4">
          {/* Menu Icon (Mobile only) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl text-orange-500">
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-1 text-2xl font-bold text-orange-500"
          >
            <span>Recipe</span>
            <FaBookOpenReader className="text-3xl text-blue-500" />
            <span>Book</span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-6 text-black font-medium">
          {navLinks}
        </nav>

        {/* Right section: Auth Buttons */}
        <div className="flex items-center gap-3">
          {/* theme toggle */}
          {/* 🌗 Theme Toggle Button */}
          <div>
            <label className="toggle text-base-content">
              <input
                type="checkbox"
                value="dark"
                className="theme-controller"
              />

              <svg
                aria-label="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>

              <svg
                aria-label="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>
          </div>

          {!user ? (
            <>
              <Link
                to="/login"
                className="btn btn-sm bg-orange-500 text-white px-4 py-1 rounded"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-sm border border-orange-500 text-orange-500 px-4 py-1 rounded hidden md:inline-block"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              {/*  Avatar with dropdown */}
              <img
                src={user.photoURL || { userIcon }}
                alt="avatar"
                className="w-8 h-8 rounded-full ring-2 ring-orange-400 cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
                title="Click to view profile"
              />

              {showDropdown && (
                <div className="absolute top-12 right-0 w-48 bg-white shadow-lg border rounded-lg p-3 z-50">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    {user.displayName || "User"}
                  </p>
                  <button
                    onClick={() => {
                      logout();
                      setShowDropdown(false);
                    }}
                    className="text-red-500 hover:underline flex items-center gap-1"
                  >
                    <FiLogOut /> Logout
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-base-100 text-base-content border-t shadow px-6 py-4 w-full text-left">
          <nav className="flex flex-col gap-3  font-medium">{navLinks}</nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
