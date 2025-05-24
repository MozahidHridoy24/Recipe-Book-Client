import { useEffect, useState } from "react";
import { Link } from "react-router";
import Banner from "../Banner";
import Spinner from "../Spinner";
import ThemeToggle from "../Utility/ThemeToggle";

const Home = () => {
  const [topRecipes, setTopRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://recipe-book-app-server-blue.vercel.app/recipes")
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
      <Banner></Banner>

      {/* Top Recipes Section */}
      <section className="py-12 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
            Top Recipes
          </h2>

          {loading ? (
            <Spinner />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topRecipes.slice(0, 6).map((recipe) => (
                <div
                  key={recipe._id}
                  className="bg-base-100 text-base-content border border-white rounded-xl shadow p-4 "
                >
                  <img
                    src={recipe.image || "https://via.placeholder.com/300x200"}
                    alt={recipe.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-orange-600">
                    {recipe.title}
                  </h3>
                  <p className=" mb-1">
                    <strong>Cuisine:</strong> {recipe.cuisine}
                  </p>
                  <p className=" mb-1">
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
            {/* Using tooltip */}
            <div
              className="tooltip tooltip-top before:bg-orange-500 before:text-white before:px-3 before:py-1 before:rounded-md before:shadow-lg"
              data-tip="Explore all available recipes"
            >
              <Link
                to="/all-recipes"
                className="inline-block px-6 py-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              >
                See All Recipes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section: Our Achievements */}
      <section className="py-12 bg-base-200 text-base-content mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-base-100 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
              <h3 className="text-4xl font-bold text-orange-500 mb-2">10K+</h3>
              <p className="text-lg font-semibold mb-1">Recipes Shared</p>
              <p className="text-sm text-gray-500">
                Curated by home cooks & chefs
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-base-100 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
              <h3 className="text-4xl font-bold text-orange-500 mb-2">5K+</h3>
              <p className="text-lg font-semibold mb-1">Active Users</p>
              <p className="text-sm text-gray-500">
                Cooking, rating & saving daily
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-base-100 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
              <h3 className="text-4xl font-bold text-orange-500 mb-2">1M+</h3>
              <p className="text-lg font-semibold mb-1">Likes & Favorites</p>
              <p className="text-sm text-gray-500">
                On delicious global recipes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section 2: Features */}
      <section className="py-12 bg-base-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-base-100 text-base-content border border-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Diverse Recipes</h3>
              <p className="">
                Explore hundreds of recipes from different cultures and diets.
              </p>
            </div>
            <div className="p-6 bg-base-100 text-base-content border border-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
              <p className="">
                Easily upload, edit, and save your favorite meals.
              </p>
            </div>
            <div className="p-6 bg-base-100 text-base-content border border-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2 ">Community Driven</h3>
              <p className="">
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
