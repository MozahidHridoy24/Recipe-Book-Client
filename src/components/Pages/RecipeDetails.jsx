import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthContext";
import Spinner from "../Spinner";

const RecipeDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [loading, setLoading] = useState(true);

  console.log(user);

  // Fetch recipe details
  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        setLikeCount(data.likes || 0);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("❌ Failed to fetch recipe");
        setLoading(false);
      });
  }, [id]);

  const handleLike = async () => {
    if (user.email === recipe.userEmail) {
      toast.warning("🚫 You can't like your own recipe!");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/recipes/${id}/like`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail: user.email }),
      });

      const result = await res.json();

      if (res.ok) {
        setLikeCount((prev) => prev + 1);
        toast.success("👍 Liked the recipe!");
      } else {
        toast.error(result.message || "❌ Failed to like recipe");
      }
    } catch (err) {
      toast.error("❌ Server error while liking");
    }
  };

  if (loading) return <Spinner></Spinner>;

  return (
    <div className="max-w-4xl mt-5 mx-auto p-6 bg-base-100 text-base-content border border-white rounded-lg shadow-md">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h2 className="text-2xl font-bold mb-2 text-orange-600">
        {recipe.title}
      </h2>
      <p className="mb-4">
        {likeCount} {likeCount === 1 ? "person" : "people"} interested in this
        recipe
      </p>

      <button
        onClick={handleLike}
        className="btn bg-orange-500 hover:bg-orange-600 text-white mb-4"
      >
        ❤️ Like
      </button>

      <div className="space-y-2">
        <p>
          <strong>Cuisine:</strong> {recipe.cuisine}
        </p>
        <p>
          <strong>Prep Time:</strong> {recipe.preparationTime} mins
        </p>
        <p>
          <strong>Ingredients:</strong> {recipe.ingredients}
        </p>
        <p>
          <strong>Instructions:</strong> {recipe.instructions}
        </p>
        <p>
          <strong>Categories:</strong> {recipe.categories?.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default RecipeDetails;
