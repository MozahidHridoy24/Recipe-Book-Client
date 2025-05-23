import { useState, useContext } from "react";
import { Link, NavLink } from "react-router";
import { FiLogOut } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import { AuthContext } from "./Contexts/AuthContext";
import { FaBookOpenReader } from "react-icons/fa6";
import ThemeToggle from "./Utility/ThemeToggle";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        to="/add-recipes"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-semibold underline"
            : "hover:text-orange-500"
        }
        onClick={() => setIsMenuOpen(false)}
      >
        Add Recipes
      </NavLink>
      <NavLink
        to="/my-recipes"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-semibold underline"
            : "hover:text-orange-500"
        }
        onClick={() => setIsMenuOpen(false)}
      >
        My Recipes
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive
            ? "text-orange-500 font-semibold underline"
            : "hover:text-orange-500"
        }
        onClick={() => setIsMenuOpen(false)}
      >
        Register
      </NavLink>
    </>
  );

  return (
    <header className="bg-base-100 text-base-content shadow-[0_4px_12px_rgba(0,0,0,0.08)] sticky top-0 z-50 border-b border-base-300">
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
        <nav className="hidden md:flex gap-6  font-medium">{navLinks}</nav>

        {/* Right section: Auth Buttons */}
        <div className="flex items-center gap-3">
          <div>
            <ThemeToggle></ThemeToggle>
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
            <div className="flex items-center gap-2">
              <img
                src={
                  user.photoURL ||
                  "https://i.ibb.co/vL1JK63/avatar-placeholder.png"
                }
                alt="avatar"
                className="w-8 h-8 rounded-full ring-2 ring-orange-400"
                title={user.displayName || "User"}
              />
              <button
                onClick={logout}
                className="text-red-500 flex items-center gap-1 hover:underline"
              >
                <FiLogOut /> Logout
              </button>
            </div>
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
