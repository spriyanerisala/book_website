/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";// Axios instance configured with baseURL

const AddBook = ({ onAdd }) => {
  const [form, setForm] = useState({
    image: "",
    title: "",
    author: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get admin token from localStorage
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in as admin to add a book");
      return;
    }

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    try {
      // POST request with Authorization header
      await axios.post(
        `${backendUrl}/books/add`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Book added successfully!");
      setForm({ image: "", title: "", author: "", category: "", description: "" });

      // Optional: refresh parent book list
      if (onAdd) onAdd();
    } catch (error) {
      console.error(error);
      alert("Error adding book");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg border border-gray-200"
    >
      <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Add New Book</h2>

      {["image", "title", "author", "category", "description"].map((field) => (
        <div key={field} className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type="text"
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={`Enter ${field}`}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 rounded-md transition-colors"
      >
        Add Book
      </button>
    </form>
  );
};

export default AddBook;
