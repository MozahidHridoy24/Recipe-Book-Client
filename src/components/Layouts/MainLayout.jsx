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
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
