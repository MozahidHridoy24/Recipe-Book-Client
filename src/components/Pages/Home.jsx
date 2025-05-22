import { useEffect, useState } from "react";
import { Link } from "react-router";
import Banner from "../Banner";
import Spinner from "../Spinner";

const Home = () => {
  const [topRecipes, setTopRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => {
        const sortedRecipes = data.sort(
          (a, b) => (b.likes || 0) - (a.likes || 0)
        ); // Sort by likes descending
        setTopRecipes(sortedRecipes);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching top recipes:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Banner />

      {/* Top Recipes Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
            Top Recipes
          </h2>

          {loading ? (
            <Spinner />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topRecipes.map((recipe) => (
                <div
                  key={recipe._id}
                  className="bg-white rounded-xl shadow p-4"
                >
                  <img
                    src={recipe.image || "https://via.placeholder.com/300x200"}
                    alt={recipe.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                  <p className="text-gray-600 mb-1">
                    <strong>Cuisine:</strong> {recipe.cuisine}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>Likes:</strong> {recipe.likes}
                  </p>
                  <Link
                    to={`/recipes/${recipe._id}`}
                    className="mt-3 inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <Link
              to="/all-recipes"
              className="inline-block px-6 py-2 bg-amber-500 text-white font-medium rounded hover:bg-amber-600"
            >
              See All Recipes
            </Link>
          </div>
        </div>
      </section>

      {/* Extra Section 1: About Us */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Welcome to Recipe Book
          </h2>
          <p className="text-gray-600">
            Discover, share, and save your favorite recipes from around the
            world. Whether you're a beginner or a seasoned chef, our platform is
            built to inspire and empower your cooking journey.
          </p>
        </div>
      </section>

      {/* Extra Section 2: Features */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Diverse Recipes</h3>
              <p className="text-gray-600">
                Explore hundreds of recipes from different cultures and diets.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
              <p className="text-gray-600">
                Easily upload, edit, and save your favorite meals.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-gray-600">
                Get inspired by top-rated recipes loved by our community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
