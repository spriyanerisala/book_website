import React, { useState, useRef, useEffect } from "react";
import { Avatar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown on menu item click
  const handleMenuItemClick = () => {
    setOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full border-none focus:outline-none"
      >
        <Avatar
          alt="User Avatar"
          className="border scale-100 border-indigo-600 rounded-4xl p-1 cursor-pointer"
          bordered
          rounded
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
          <ul className="flex flex-col py-1">
            <NavLink
              to="/profile"
              onClick={handleMenuItemClick}
              className="block px-4 py-2 hover:bg-indigo-50 text-slate-700"
            >
              My Profile
            </NavLink>
            <NavLink
              to="/my-books"
              onClick={handleMenuItemClick}
              className="block px-4 py-2 hover:bg-indigo-50 text-slate-700"
            >
              My Books
            </NavLink>
            <NavLink
              to="/liked-books"
              onClick={handleMenuItemClick}
              className="block px-4 py-2 hover:bg-indigo-50 text-slate-700"
            >
              Liked Books
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
