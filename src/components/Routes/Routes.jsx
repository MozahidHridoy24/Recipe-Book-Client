import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import { Children } from "react";
import ErrorPage from "../ErrorPage";
import Home from "../Pages/Home";
import Register from "../Register";
import AddRecipe from "../Pages/AddRecipe";
import AllRecipes from "../Pages/AllRecipes";
import PrivateRoute from "../Contexts/PrivateRoute";
import MyRecipes from "../Pages/MyRecipes";
import RecipeDetails from "../Pages/RecipeDetails";
import Login from "../Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-recipes",
        element: (
          <PrivateRoute>
            <AddRecipe></AddRecipe>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-recipes",
        element: <AllRecipes></AllRecipes>,
      },
      {
        path: "/my-recipes",
        element: (
          <PrivateRoute>
            <MyRecipes></MyRecipes>
          </PrivateRoute>
        ),
      },
      {
        path: "/recipes/:id",
        element: (
          <PrivateRoute>
            <RecipeDetails></RecipeDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
