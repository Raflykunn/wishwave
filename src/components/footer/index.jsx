import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo dan Deskripsi */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-yellow-500">
              <span className="text-white">Wish</span>Wave
            </h2>
            <p className="text-sm mt-2">
              Memperkenalkan produk PKK dengan cara yang kreatif dan menarik.
            </p>
          </div>

          {/* Navigasi */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link to="/" className="text-lg hover:text-yellow-500">
              Home
            </Link>
            <Link to="/event" className="text-lg hover:text-yellow-500">
              Event
            </Link>
            <Link to="/about" className="text-lg hover:text-yellow-500">
              About
            </Link>
            <Link to="/product" className="text-lg hover:text-yellow-500">
              Product
            </Link>
            <Link to="/contact" className="text-lg hover:text-yellow-500">
              Contact
            </Link>
          </div>
        </div>

        {/* Hak Cipta */}
        <div className="text-center mt-6">
          <p className="text-sm">
            &copy; 2024 Wishwave. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
