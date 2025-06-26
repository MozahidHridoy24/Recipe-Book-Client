import {
  FaBookOpenReader,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-orange-100 text-base-content border-t border-base-300 py-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Info */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-2xl font-bold text-orange-500 mb-2">
            <span>Recipe</span>
            <FaBookOpenReader className="text-blue-500 text-3xl" />
            <span>Book</span>
          </div>
          <p className="text-sm text-gray-600">
            A platform to explore, share, and discover recipes from around the
            world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-orange-600 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-orange-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-recipes" className="hover:text-orange-600">
                All Recipes
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-orange-600">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-600">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-orange-600 mb-3">
            Connect
          </h3>
          <p className="text-sm mb-2">Email: hridoy1407@gmail.com</p>
          <p className="text-sm mb-4">Phone: 01913959624</p>
          <div className="flex justify-center md:justify-start gap-4 text-xl text-orange-500">
            <a
              href="https://facebook.com/mujahidulislam.hridoy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://github.com/MozahidHridoy24"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-800 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/mozahidul-islam-hridoy-118576228"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-800 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RecipeBook. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
