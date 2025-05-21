// src/components/Footer.jsx
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Website Name */}
        <h2 className="text-xl font-semibold text-orange-500">Recipe Book</h2>

        {/* Contact Info */}
        <div className="text-center">
          <p>Contact: recipebook@example.com</p>
          <p>© {new Date().getFullYear()} Recipe Book. All rights reserved.</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-orange-500 text-xl">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
