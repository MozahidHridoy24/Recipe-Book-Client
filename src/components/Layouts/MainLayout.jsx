import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer";
import PageTitle from "../Utility/PageTitle";

const MainLayout = () => {
  return (
    <div>
      <PageTitle></PageTitle>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
