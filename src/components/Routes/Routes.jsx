import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import { Children } from "react";
import ErrorPage from "../ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Register";
import AddRecipe from "../Pages/AddRecipe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [{
        index: true,
        path: '/',
        element : <Home></Home>
    },
    {
        path:'/login',
        element: <Login></Login>,
    },
    {
        path:'/register',
        element: <Register></Register>
    },
    {
        path:'/add-recipes',
        element: <AddRecipe></AddRecipe>,
    },
],
  },
]);
