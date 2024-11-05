import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LineBetweenHomeAbout from "../assets/Rectangle 2.svg";
import Ellipse from "../assets/Ellipse 1.svg";
import Ellipse2 from "../assets/Ellipse 2.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-white w-4/5 mx-auto flex items-center justify-between py-8 relative">
      <div className="hidden lg:flex items-center gap-6">
        <ul className="flex flex-row gap-6 cursor-pointer font-medium relative">
          <li className="hover:text-gray-300">Home</li>
          <img
            src={LineBetweenHomeAbout}
            className="absolute left-[calc(18%-0px)] top-[calc(50%-56px)] h-screen w-px hidden xl:block"
            alt="Line Divider"
          />
          <img
            src={Ellipse}
            className="absolute left-[calc(18%-14px)] top-[calc(50%+400px)] transform -translate-y-1/2 hidden xl:block"
            alt="Centered SVG"
          />
          <li className="hover:text-gray-300">About</li>
          <li className="hover:text-gray-300">Testimonials</li>
          <li className="hover:text-gray-300">Contact</li>
        </ul>
      </div>

      <div className="text-center lg:flex-1">
        <h3 className="font-bold text-xl lg:pr-24">SMART HOME</h3>
      </div>

      <div className="hidden lg:flex items-center gap-6">
        <ul className="flex flex-row gap-6 cursor-pointer items-center">
          <li className="hover:text-gray-300">Login</li>
          <li className="relative flex items-center">
            <img
              src={LineBetweenHomeAbout}
              className="absolute -z-0 left-[calc(18%+46px)] top-[calc(50%-56px)] h-screen transform -translate-x-1/2 hidden xl:block"
              alt="Button Divider"
            />
            <img
              src={Ellipse2}
              className="absolute left-[calc(18%+30px)] top-[calc(50%+90px)] transform -translate-y-1/2 hidden xl:block"
              alt="Centered SVG"
            />
            <button className="bg-white z-10 cursor-pointer text-black px-8 py-2 rounded shadow-[0px_4px_20px_rgba(0,0,0,0.25)] border-transparent border-2 transition duration-600 ease-in-out hover:bg-blue-500 hover:text-white hover:border-white">
              Sign up
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-blue-500 text-white flex flex-col items-center py-4 lg:hidden z-50">
          <div className="flex items-center justify-between w-full px-6 mt-4">
            <h3 className="font-bold text-xl">SMART HOME</h3>
            <button
              onClick={toggleMenu}
              aria-label="Close Menu"
              className="text-white pr-3"
            >
              <FaTimes size={30} />
            </button>
          </div>

          {/* Main Navigation Links */}
          <ul className="flex flex-col gap-6 cursor-pointer font-medium text-center mt-8">
            <li className="hover:text-gray-300">Home</li>
            <li className="hover:text-gray-300">About</li>
            <li className="hover:text-gray-300">Testimonials</li>
            <li className="hover:text-gray-300">Contact</li>
          </ul>

          <ul className="flex flex-col gap-6 mt-6 items-center">
            <li className="hover:text-gray-300">Login</li>
            <li>
              <button className="bg-white cursor-pointer text-black px-6 py-2 rounded shadow-[0px_4px_20px_rgba(0,0,0,0.25)] border-transparent border-2 transition duration-600 ease-in-out hover:bg-blue-600 hover:text-white hover:border-white">
                Sign up
              </button>
            </li>
          </ul>

          {/* Social Media Icons at the Bottom */}
          <div className="mt-auto pb-8 flex gap-6">
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
