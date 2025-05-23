import React from "react";
import Navbar from "../../components/header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/footer/Footer";

const Root = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
