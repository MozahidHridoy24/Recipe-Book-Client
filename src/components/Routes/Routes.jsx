import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import { Children } from "react";
import ErrorPage from "../ErrorPage";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [{
        index: true,
        path: '/',
        element : <Home></Home>
    }],
  },
]);
