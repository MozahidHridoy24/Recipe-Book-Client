import { useEffect, useState } from "react";
import { Link } from "react-router"; // ❌ Should be 'react-router-dom' if you're using react-router v6+
import Spinner from "../Spinner";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [cuisineFilter, setCuisineFilter] = useState("All"); 
  const [cuisineOptions, setCuisineOptions] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setFilteredRecipes(data); 
        setLoading(false);
        const cuisines = Array.from(new Set(data.map((r) => r.cuisine)));
        setCuisineOptions(["All", ...cuisines]);
      })
      .catch((err) => {
        console.error("Failed to fetch recipes:", err);
        setLoading(false);
      });
  }, []);

  // Handle dropdown filter change
  const handleFilterChange = (e) => {
    const selected = e.target.value;
    setCuisineFilter(selected);

    if (selected === "All") {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter((r) => r.cuisine === selected);
      setFilteredRecipes(filtered);
    }
  };

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

      {/* Dropdown for cuisine filter */}
      <div className="mb-6 text-center">
        <label className="mr-2 font-semibold text-gray-700">Filter by Cuisine:</label>
        <select
          value={cuisineFilter}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded px-3 py-1"
        >
          {cuisineOptions.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>

      {/*Use filteredRecipes instead of all recipes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
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
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
