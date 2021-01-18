import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => (
  <div className="flex justify-between items-center dark:bg-gray-900 bg-gray-100">
    <nav className="flex-row md:justify-between items-center">
      <div className="flex justify-between items-center w-screen px-4 py-2">
        <Link to="/">
          <div className="flex items-center">
            <img className="h-12 mr-2" src="/logo.png" alt="Our Logo" />
            <h1 className="hover:text-green-500 hidden md:block">
              Open Source Adam
            </h1>
          </div>
        </Link>
        <div className="ml-2" id="mobileMenu">
          <Link to="/projects" className="ml-3">
            Projects
          </Link>
          <Link to="/doc" className="ml-3">
            Documents
          </Link>
          <Link to="/login" className="ml-3 primary-button">
            Login
          </Link>
        </div>
      </div>
    </nav>
  </div>
);

export default NavBar;
