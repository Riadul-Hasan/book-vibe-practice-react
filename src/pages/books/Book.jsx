import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  console.log(book);
  const {
    image,
    bookName,
    bookId,
    category,
    rating,
    yearOfPublishing,
    tags,
    author,
  } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 border-4 border-gray-200  shadow-sm">
        <figure className="bg-gray-200">
          <img className="w-84 h-84 p-4 rounded-2xl" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-start mb-2">
            <div className="badge badge-outline ">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaStarHalfAlt />
            </div>
          </div>
          <h2 className="card-title">
            {bookName}

            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <div className="flex w-2/5">
            {tags.map((tag) => (
              <p className="font-bold">{tag}</p>
            ))}
          </div>
          <h3 className="font-semibold  border-t-2 border-dashed p-2">
            {author}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Book;
