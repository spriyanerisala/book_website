/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from 'axios'

const EditBooks = () => {
  const [books, setBooks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    image: "",
    title: "",
    author: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const backendUrl= import.meta.env.VITE_BACKEND_URL
  const fetchBooks = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/books/all-books`);
      setBooks(data.books || data); // depending on your response format
    } catch (err) {
      alert("Failed to fetch books");
    }
  };

  const startEdit = (book) => {
    setEditId(book._id);
    setForm({
      image: book.image || "",
      title: book.title,
      author: book.author,
      category: book.category,
      description: book.description,
    });
  };

  const cancelEdit = () => {
    setEditId(null);
    setForm({ image: "", title: "", author: "", category: "", description: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (id) => {
     const token = localStorage.getItem("token"); 
    try {
      await axios.put(`${backendUrl}/books/update/${id}`, form,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Book updated!");
      cancelEdit();
      fetchBooks();
    } catch (err) {
      alert("Update failed");
    }
  };

  const handleDelete = async (id) => {
     const token = localStorage.getItem("token");
    if (!window.confirm("Are you sure you want to delete this book?")) return;
    try {
      await axios.delete(`${backendUrl}/books/delete/${id}`,{
         headers: {
        Authorization: `Bearer ${token}`,
      },
      });
      alert("Book deleted");
      fetchBooks();
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl mb-4 font-semibold">Edit Books</h2>

      
      {books.map((book) => (
  <div
    key={book._id}
    className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl p-6 mb-6 border border-gray-200"
  >
    {editId === book._id ? (
      <>
        {["image", "title", "author", "category", "description"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="block w-full border border-gray-300 p-2 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        ))}
        <div className="flex gap-3">
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md transition-colors"
            onClick={() => handleUpdate(book._id)}
          >
            Update
          </button>
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded-md transition-colors"
            onClick={cancelEdit}
          >
            Cancel
          </button>
        </div>
      </>
    ) : (
      <>
        <div className="flex items-center mb-4">
          {book.image && (
            <img
              src={book.image}
              alt={book.title}
              className="w-20 h-28 object-cover rounded-lg mr-4 border"
            />
          )}
          <div>
            <h3 className="text-xl font-semibold text-indigo-700">{book.title}</h3>
            <p className="text-gray-600"><strong>Author:</strong> {book.author}</p>
            <p className="text-gray-600"><strong>Category:</strong> {book.category}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{book.description}</p>
        <div className="flex gap-3">
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-colors"
            onClick={() => startEdit(book)}
          >
            Edit
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
            onClick={() => handleDelete(book._id)}
          >
            Delete
          </button>
        </div>
      </>
    )}
  </div>
))}

    </div>
  );
};

export default EditBooks;
  