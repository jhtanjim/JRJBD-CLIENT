import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const footerItems = (
    <>
      <li className="text-lg">
        <Link to="/">Home</Link>
      </li>
      <li className="text-lg">
        <Link to="/about">About</Link>
      </li>
      <li className="text-lg">
        <Link to="/services">Services</Link>
      </li>
      <li className="text-lg">
        <Link to="/allproduct">All Products</Link>
      </li>
      <li className="text-lg">
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="bg-gray-100 text-black py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          {/* Logo Section */}
          <div className="flex justify-center items-center">
            <Link to="/">
              <img className="h-28" src={logo} alt="Company Logo" />
            </Link>
          </div>

          {/* Footer Links */}
          <div>
            <ul className="menu menu-vertical lg:menu-horizontal flex space-x-4 lg:space-x-6 text-lg">
              {footerItems}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-2xl hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-2xl hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl hover:text-gray-300">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center">
          <Link to={"/contact"}>
            <button className="btn btn-outline btn-primary px-6 py-2 rounded-lg text-lg">
              Make an Appointment
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-8 text-sm">
        <p>&copy; {new Date().getFullYear()} jrjbd. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
