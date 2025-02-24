import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center  px-3  bg-white  gap-x-96  border-b-4 border-pink-400">
      {/* Logo */}
      <div className="flex-shrink-0 mr-48 ">
        <img
          src="https://www.eci.gov.in/newimg/eci-logo.svg"
          alt="ECI Logo"
          className="h-16  w-48 md:w-64"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-16 text-sm md:text-base hidden lg:block font-medium">
        <Link
          to="/"
          className="text-blue-900 hover:text-[#B81D3F] transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/articles"
          className="text-blue-900 hover:text-[#B81D3F] transition duration-300"
        >
          Articles
        </Link>
        <Link
          to="/about"
          className="text-blue-900 hover:text-[#B81D3F] transition duration-300"
        >
          About
        </Link>
        <button onClick={()=>navigate('/login')} className="h-10 w-36 bg-blue-500 rounded-xl text-white hover:bg-[#B81D3F] transition duration-300 shadow-md">
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
