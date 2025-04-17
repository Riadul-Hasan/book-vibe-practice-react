import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToLocalStorage } from "../../utilities/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const bookData = useLoaderData();
  const singleBook = bookData.find((book) => book.bookId === bookId);
  console.log(singleBook);
  const { bookName, image } = singleBook;
  const handleMarkAsRead = (id) => {
    addToLocalStorage(id);
  };
  return (
    <div className="card m-10 p-2  bg-base-200 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
      </div>
      <figure>
        <img src={image} className="w-80 h-80 rounded-xl" alt="Shoes" />
      </figure>
      <div className="flex gap-6 mt-6 justify-around">
        <button
          onClick={() => handleMarkAsRead(id)}
          className="btn btn-success"
        >
          Mark as Read
        </button>
        <button className="btn btn-warning">Add to Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;
