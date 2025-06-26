import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Spinner from "../Spinner";

const DashboardCards = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalRecipes: 0,
    myRecipes: 0,
    likedRecipes: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          `https://recipe-book-app-server-blue.vercel.app/dashboard/stats?email=${user?.email}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch stats");
        }

        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error("Failed to fetch dashboard stats:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) fetchStats();
  }, [user]);

  if (loading) return <Spinner></Spinner>;

  return (
    <div>
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-orange-500 mb-2">
          Welcome, {user?.displayName || "Chef"}!
        </h1>
        <p className="text-base text-gray-600">
          Here’s your dashboard overview.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Recipes */}
        <div className="bg-orange-100 border-l-4 border-orange-500 p-5 rounded shadow">
          <h2 className="text-xl font-semibold text-orange-600">
            Total Recipes
          </h2>
          <p className="text-3xl font-bold text-orange-700 mt-2">
            {stats.totalRecipes}
          </p>
        </div>

        {/* My Recipes */}
        <div className="bg-blue-100 border-l-4 border-blue-500 p-5 rounded shadow">
          <h2 className="text-xl font-semibold text-blue-600">My Recipes</h2>
          <p className="text-3xl font-bold text-blue-700 mt-2">
            {stats.myRecipes}
          </p>
        </div>

        {/* Placeholder for another card */}
        <div className="bg-green-100 border-l-4 border-green-500 p-5 rounded shadow">
          <h2 className="text-xl font-semibold text-green-600">Total Likes</h2>
          <p className="text-3xl font-bold text-green-700 mt-2">
            {stats.likedRecipes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
