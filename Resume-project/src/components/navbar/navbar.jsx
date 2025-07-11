import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Logo Section */}
        <div className="font-bold text-lg text-gray-800">
          <Link
            to="space"
            smooth={true}
            duration={500}
            className="custom-cursor hover:text-gray-600"
          >
            {/* Somya's Portfolio */}
          </Link>
        </div>

        {/* Links Section */}
        <div className="flex gap-8 text-gray-700 text-sm font-medium">
          {["space", "work", "journey", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              activeClass=" font-semibold border-b-2 border-black pb-1"
              className="custom-cursor hover:text-gray-600 transition-all"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
