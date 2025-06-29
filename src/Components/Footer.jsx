import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 font-[sora] text-white p-4">
      <div className="flex flex-col items-center max-w-5xl mx-auto space-y-2">
        <span className="text-sm">Terms & Conditions</span>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            <FaInstagram className="text-xl" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaFacebook className="text-xl" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaTwitter className="text-xl" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaLinkedin className="text-xl" />
          </a>
        </div>
        <span className="text-sm">© 2025 SHEIKH MINHAJUL ABEDIN</span>
      </div>
    </footer>
  );
};

export default Footer;
