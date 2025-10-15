/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AdminNavbar from "../pages/AdminNavbar";
import AddBook from "../pages/AddBook";
import EditBooks from "../pages/EditBooks";

import axios from "axios";
const ManageBooks= () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  // Fetch all books on mount
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${backendUrl}/books/all-books`,{
          headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
        });
        console.log(response.data)
        setBooks(response.data.books || response.data || []); 
      } catch (error) {
        alert("Failed to load books");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Refresh books (pass down to child so they can refresh after update/delete)
  const refreshBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${backendUrl}/books/all-books`,{
        headers:{
          "Cache-Control":"no-cache",
          Pragma:"no-cache",
        }
      });
      console.log(response.data)
      setBooks(response.data.books ||  response.data ||[]);
    } catch {
      alert("Failed to refresh books");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
   
      <div className="p-4 max-w-6xl mx-auto">
        
     
        <hr className="my-8" />
        {loading ? (
          <p>Loading books...</p>
        ) : (
          <EditBooks books={books} refreshBooks={refreshBooks} />
        )}
      </div>
    </>
  );
};

export default ManageBooks;
