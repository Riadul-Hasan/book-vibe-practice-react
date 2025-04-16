import React from "react";
import Hero from "../../components/header/Hero";
import Books from "../books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const booksData = useLoaderData();
  //   console.log(booksData);
  return (
    <div className="mb-20">
      <Hero></Hero>
      <Books key={booksData} booksData={booksData}></Books>
    </div>
  );
};

export default Home;
