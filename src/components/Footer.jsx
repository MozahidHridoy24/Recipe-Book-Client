// src/components/Footer.jsx
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-base-content py-8  shadow-2xl border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Website Name */}
        <h2 className="flex items-center gap-1 text-xl font-semibold text-orange-500">
          Recipe
          <FaBookOpenReader className="text-3xl text-blue-500" />
          Book
        </h2>

        {/* Contact Info */}
        <div className="text-center">
          <p>Contact: recipebook@example.com</p>
          <p>© {new Date().getFullYear()} Recipe Book. All rights reserved.</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-orange-500 text-xl">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
