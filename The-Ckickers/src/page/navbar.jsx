import React, { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold">The Clickers</div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          <a href="/" className="hover:text-blue-200">
            Home
          </a>
          {/* <a href="/" className="hover:text-blue-200">
            login
          </a> */}
          <div className="relative">
            <button
              className="hover:text-blue-200"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img
                src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg">
                <a
                  href="/Studentprofile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  View Profile
                </a>
                <a href="/login" className="block px-4 py-2 hover:bg-gray-100">
                  LogOut
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
