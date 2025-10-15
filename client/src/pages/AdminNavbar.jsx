import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login"); 
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-indigo-300 text-white shadow-md">
      <div className="text-xl font-bold cursor-pointer" onClick={() => navigate("/admin/dashboard")}>
        Admin Panel
      </div>
      <div className="flex space-x-6">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/add-book"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          Add Book
        </NavLink>
        <NavLink
          to="/admin/manage-books"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          Manage Books
        </NavLink>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded transition"
      >
        Logout
      </button>
    </nav>
  );
};

export default AdminNavbar;
