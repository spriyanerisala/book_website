import React, { useEffect, useState } from 'react';
import BookCard from '../pages/BookCard';
import axios from 'axios';

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/books/all-books', {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        });
        console.log(response.data);
        setBooks(response.data.books || []);
      } catch (error) {
        console.error(error);
        setError("Failed to load books.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-12 text-indigo-600 text-xl font-medium">
        Loading books...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-12 text-red-500 text-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
        Admin Dashboard
      </h1>

      <div className="grid sm:grid-cols-3 sm:gap-6  sm:mb-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
