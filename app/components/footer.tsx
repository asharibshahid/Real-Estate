import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-400">
            At RealEstate, we provide top-notch property solutions tailored to your needs. Discover your dream home or find the perfect space for your business with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 transition cursor-pointer">Home</li>
            <li className="hover:text-gray-400 transition cursor-pointer">Properties</li>
            <li className="hover:text-gray-400 transition cursor-pointer">Rentals</li>
            <li className="hover:text-gray-400 transition cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: info@realestate.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Real Estate Ave, City, Country</li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-8 flex justify-center space-x-6">
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl transition hover:scale-110"
          style={{ color: 'pink', filter: 'drop-shadow(0px 0px 5px pink)' }}
        >
          <FaFacebookF />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl transition hover:scale-110"
          style={{ color: 'blue', filter: 'drop-shadow(0px 0px 5px blue)' }}
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl transition hover:scale-110"
          style={{ color: 'purple', filter: 'drop-shadow(0px 0px 5px purple)' }}
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl transition hover:scale-110"
          style={{ color: 'white', filter: 'drop-shadow(0px 0px 5px white)' }}
        >
          <FaLinkedinIn />
        </Link>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} RealEstate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
