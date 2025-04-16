import React from "react";
import Book from "./Book";

const Books = ({ booksData }) => {
  return (
    <div className=" mt-28 p-6">
      <div className="grid grid-cols-3 gap-10">
        {booksData.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
