import React from 'react';

const BookCard = ({ book }) => {
  if (!book) return null; // prevents render if book is undefined

  return (


 <div className=" border   bg-white cursor-pointer   ease-in border-indigo-500 rounded-lg shadow-md p-4  w-70 ">
      <div className="h-48 w-full  bg-indigo-100 rounded mb-4 flex items-center justify-center">
        {book.image ? (
          <img
            src={book.image}
            alt={book.title}
            className="h-full object-cover rounded"
          />
        ) : (
          <span className="text-indigo-500 text-sm">No Image</span>
        )}
      </div>
      <h2 className="text-lg font-semibold text-indigo-500 mb-1">
        {book.title}
      </h2>
      <p className="text-sm text-slate-700 mb-1">By {book.author}</p>
      <p className="text-sm text-slate-600">{book.description}</p>
    
    </div>
   
  );
};

export default BookCard;
