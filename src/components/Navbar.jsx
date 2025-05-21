// src/components/Navbar.jsx
import { Link, NavLink } from 'react-router';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { AuthContext } from './Contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navLinks = (
    <>
      <NavLink to="/" className="hover:text-orange-500">Home</NavLink>
      <NavLink to="/all-recipes" className="hover:text-orange-500">All Recipes</NavLink>
      {user && (
        <>
          <NavLink to="/add-recipe" className="hover:text-orange-500">Add Recipe</NavLink>
          <NavLink to="/my-recipes" className="hover:text-orange-500">My Recipes</NavLink>
        </>
      )}
    </>
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-500">Recipe Book</Link>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-gray-700 font-medium">
          {navLinks}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          {!user ? (
            <>
              <Link to="/login" className="btn btn-sm bg-orange-500 text-white px-4 py-1 rounded">Login</Link>
              <Link to="/register" className="btn btn-sm border border-orange-500 text-orange-500 px-4 py-1 rounded">Register</Link>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <img
                src={user.photoURL || 'https://i.ibb.co/vL1JK63/avatar-placeholder.png'}
                alt="avatar"
                className="w-8 h-8 rounded-full ring-2 ring-orange-400"
                title={user.displayName || 'User'}
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
    </header>
  );
};

export default Navbar;
