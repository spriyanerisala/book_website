import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import axios from 'axios';

const BookList = () => {

    const [books,setBooks] = useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState("")

    useEffect(()=>{
        const fetchBooks = async ()=>{
            try{

                const response = await axios.get('http://localhost:5000/api/books/all-books')
                console.log(response.data)
                setBooks(response.data.books || [])

            }catch(error){
console.error(error);
        setError("Failed to load books.");
            }finally{
                setLoading(false)
            }
        }
    fetchBooks()
    },[])

    if (loading) {
    return <div className="text-center mt-8 text-indigo-500">Loading books...</div>;
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">{error}</div>;
  }
  return (
    <div className="grid sm:grid-cols-2  p-4">
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
