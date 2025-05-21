import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const AddRecipe = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    ingredients: "",
    instructions: "",
    cuisine: "Italian",
    preparationTime: "",
    categories: [],
    likes: 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedCategories = checked
        ? [...formData.categories, value]
        : formData.categories.filter((cat) => cat !== value);
      setFormData({ ...formData, categories: updatedCategories });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipeData = {
      ...formData,
      userEmail: user?.email,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      preparationTime: Number(formData.preparationTime),
      likes: 0,
    };

    try {
      const res = await fetch("http://localhost:3000/recipes", {
        method: "POST",
        headers: {
             "Content-Type": "application/json" 
            },
        body: JSON.stringify(recipeData),
      });
      const data = await res.json();
      if (data.insertedId || data.acknowledged) {
        Swal.fire("Success!", "Recipe added successfully.", "success");
        navigate("/all-recipes");
      }
    } catch (error) {
      Swal.fire("Error!", "Failed to add recipe.", "error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-orange-500 text-center">
        Add New Recipe
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image */}
        <div>
          <label className="block font-semibold text-amber-500 mb-1">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            placeholder="https://example.com/image.jpg"
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Title */}
        <div>
          <label className="block font-semibold text-amber-500 mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Delicious Pasta"
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold text-amber-500 mb-1">
            Ingredients
          </label>
          <textarea
            name="ingredients"
            placeholder="Enter ingredients (comma-separated)"
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            required
          />
        </div>

        {/* Instructions */}
        <div>
          <label className="block font-semibold text-amber-500 mb-1">
            Instructions
          </label>
          <textarea
            name="instructions"
            placeholder="Step-by-step cooking instructions"
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            required
          />
        </div>

        {/* Cuisine Type */}
        <div>
          <label className="block font-semibold text-amber-500 mb-1">
            Cuisine Type
          </label>
          <select
            name="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option>Italian</option>
            <option>Mexican</option>
            <option>Indian</option>
            <option>Chinese</option>
            <option>Others</option>
          </select>
        </div>

        {/* Preparation Time */}
        <div>
          <label className="block font-semibold text-amber-500 mb-1">
            Preparation Time (minutes)
          </label>
          <input
            type="number"
            name="preparationTime"
            placeholder="30"
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Categories */}
        <div>
          <label className="block font-semibold text-amber-500 mb-2">
            Categories
          </label>
          <div className="flex flex-wrap gap-4">
            {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map((cat) => (
              <label key={cat} className="label cursor-pointer">
                <input
                  type="checkbox"
                  name="categories"
                  value={cat}
                  checked={formData.categories.includes(cat)}
                  onChange={handleChange}
                  className="checkbox mr-2"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn bg-orange-500 text-white w-full hover:bg-orange-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
