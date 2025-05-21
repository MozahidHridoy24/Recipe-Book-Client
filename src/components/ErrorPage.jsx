import React from "react";
import { Link } from "react-router";
import notFoundImg from "../assets/Error-img.jpg";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center h-screen bg-orange-50 px-4">
      <img
        src={notFoundImg}
        alt="Page not found"
        className="w-64 md:w-96 mb-8"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-md">
        The recipe you're craving seems to have been eaten or doesn't exist.
        Let's head back and find something delicious!
      </p>
      <Link
        to="/"
        className="btn btn-warning text-white px-6 py-2 text-lg font-medium"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
