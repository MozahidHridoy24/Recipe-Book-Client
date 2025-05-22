import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Spinner from "../Spinner";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch recipe.");
        return res.json();
      })
      .then((data) => {
        setRecipe(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        Swal.fire("Error", "Unable to load recipe details", "error");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner></Spinner>;

  if (!recipe) {
    return (
      <div className="text-center text-xl text-red-500 mt-20">
        Recipe not found!
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-orange-600 mb-6 text-center">
        {recipe.title}
      </h2>
      <img
        src={recipe.image || "https://via.placeholder.com/600x300"}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow mb-6"
      />
      <div className="space-y-4 text-lg">
        <p>
          <span className="font-semibold text-gray-700">Cuisine:</span>{" "}
          {recipe.cuisine}
        </p>
        <p>
          <span className="font-semibold text-gray-700">Preparation Time:</span>{" "}
          {recipe.preparationTime} minutes
        </p>
        <p>
          <span className="font-semibold text-gray-700">Categories:</span>{" "}
          {recipe.categories?.join(", ")}
        </p>
        <p>
          <span className="font-semibold text-gray-700">Likes:</span>{" "}
          {recipe.likes || 0}
        </p>
        <div>
          <h3 className="text-xl font-semibold mt-4 text-orange-500">
            Ingredients:
          </h3>
          <p>{recipe.ingredients}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mt-4 text-orange-500">
            Instructions:
          </h3>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
