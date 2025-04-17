import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utilities/addToDB";
import Book from "../books/Book";
const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    const storedBookDataFromLocalStorage = getStoredBook();
    // console.log(storedBookDataFromLocalStorage);
    const convertedStoredBook = storedBookDataFromLocalStorage.map((id) =>
      parseInt(id)
    );
    console.log(convertedStoredBook);
    const myReadList = data.filter((books) =>
      convertedStoredBook.includes(books.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortByPages = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortByPages);
    }
    if (type === "ratings") {
      const sortByRatings = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortByRatings);
    }
  };
  return (
    <div>
      <div className="m-10 flex justify-center">
        <details className="dropdown">
          <summary className="btn m-1">Sort By : {sort ? sort : ""}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("ratings")}>Ratings</a>
            </li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="m-10">Any content 1</h2>
          <div className="grid grid-cols-3 gap-6 p-8">
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
