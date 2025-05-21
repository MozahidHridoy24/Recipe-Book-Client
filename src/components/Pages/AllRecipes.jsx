import { div } from "motion/react-client";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Spinner from "../Spinner";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch recipes:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">
        All Recipes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-orange-600 mb-1">
                {recipe.title}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-semibold">Cuisine:</span> {recipe.cuisine}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-semibold">Prep Time:</span>{" "}
                {recipe.prepTime} mins
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-semibold">Likes:</span> {recipe.likes}
              </p>
              <Link
                to={`/recipes/${recipe._id}`}
                className="mt-auto btn btn-sm bg-orange-500 text-white hover:bg-orange-600"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
