import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { doSignOut } from "../../firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="flex justify-between items-center px-7 w-full border-b bg-white shadow py-3 relative">
      {/* Brand */}
      <Link to="/" className="text-2xl font-extrabold group transition">
        <span className="group-hover:text-yellow-500 transition">Wish</span>
        <span className="text-yellow-400 group-hover:text-black transition">
          Wave
        </span>
      </Link>

      {/* Desktop Links (Centered) */}
      <div className="hidden lg:flex flex-grow justify-center space-x-8">
        <Link to="/" className="text-lg text-gray-700 hover:text-yellow-400">
          Home
        </Link>
        <Link
          to="/event"
          className="text-lg text-gray-700 hover:text-yellow-400"
        >
          Event
        </Link>
        <Link
          to="/about"
          className="text-lg text-gray-700 hover:text-yellow-400"
        >
          About
        </Link>
        <Link
          to="/product"
          className="text-lg text-gray-700 hover:text-yellow-400"
        >
          Product
        </Link>
        <Link
          to="/contact"
          className="text-lg text-gray-700 hover:text-yellow-400"
        >
          Contact
        </Link>
      </div>

      {/* Right-side (Login/Sign-up or Profile) */}
      <div className="flex items-center space-x-4">
        {userLoggedIn ? (
          <button
            className="w-10 h-10 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-200 items-center justify-center hidden lg:flex"
            title="Profile"
            onClick={() => navigate("/profile")}
          >
            <FaUserCircle className="text-gray-700 text-2xl" />
          </button>
        ) : (
          <>
            <Link
              to="/sign-in"
              className="text-lg text-white bg-yellow-500 hover:bg-black rounded-lg px-4 py-2 transition duration-200"
            >
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className="text-lg text-white bg-black hover:bg-yellow-500 rounded-lg px-4 py-2 transition duration-200"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden flex items-center space-x-4">
        <button onClick={() => setIsMenuOpen(true)}>
          <FaBars className="text-gray-700 text-xl" />
        </button>
      </div>

      {/* Mobile Menu (Offcanvas) */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMenu}
          ></div>

          {/* Offcanvas Menu */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Menu</h2>
              <button onClick={closeMenu}>
                <FaTimes className="text-gray-700 text-2xl" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-base text-gray-700 hover:text-yellow-400 text-center"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/event"
                className="text-base text-gray-700 hover:text-yellow-400 text-center"
                onClick={closeMenu}
              >
                Event
              </Link>
              <Link
                to="/about"
                className="text-base text-gray-700 hover:text-yellow-400 text-center"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/product"
                className="text-base text-gray-700 hover:text-yellow-400 text-center"
                onClick={closeMenu}
              >
                Product
              </Link>
              <Link
                to="/contact"
                className="text-base text-gray-700 hover:text-yellow-400 text-center"
                onClick={closeMenu}
              >
                Contact
              </Link>
              {userLoggedIn ? (
                <>
                  <button
                    onClick={() => {
                      closeMenu();
                      doSignOut().then(() => {
                        navigate("/sign-in");
                      });
                    }}
                    className="text-base text-gray-700 hover:text-yellow-400"
                  >
                    Logout
                  </button>
                  <Link
                    to={"/profile"}
                    className="text-base text-gray-700 hover:text-yellow-400 text-center"
                    onClick={closeMenu}
                  >
                    Profile
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/sign-in"
                    className="text-base text-gray-700 hover:text-yellow-400 text-center"
                    onClick={closeMenu}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/sign-up"
                    className="text-base text-gray-700 hover:text-yellow-400 text-center"
                    onClick={closeMenu}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
