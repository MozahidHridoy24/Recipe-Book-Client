import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../ErrorPage";
import Home from "../Pages/Home";
import Register from "../Register";
import AddRecipe from "../Pages/AddRecipe";
import AllRecipes from "../Pages/AllRecipes";
import PrivateRoute from "../Contexts/PrivateRoute";
import MyRecipes from "../Pages/MyRecipes";
import RecipeDetails from "../Pages/RecipeDetails";
import Login from "../Login";
import Dashboard from "../Pages/Dashboard";
import DashboardCards from "../Pages/DashboardCards";

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
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            index: true, // /dashboard (Overview)
            element: <DashboardCards />, // or any Overview component
          },
          {
            path: "add-recipes", // /dashboard/add-recipes
            element: <AddRecipe />,
          },
          {
            path: "my-recipes", // /dashboard/my-recipes
            element: <MyRecipes />,
          },
        ],
      },

      {
        path: "/all-recipes",
        element: <AllRecipes></AllRecipes>,
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
