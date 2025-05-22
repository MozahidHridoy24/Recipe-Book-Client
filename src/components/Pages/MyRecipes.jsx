import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import Spinner from "../Spinner";

const MyRecipes = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/recipes/user/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setRecipes(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching recipes:", err);
          setLoading(false);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/recipes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            setRecipes(recipes.filter((r) => r._id !== id));
            Swal.fire("Deleted!", "Your recipe has been deleted.", "success");
          })
          .catch((err) => {
            console.error("Error deleting recipe:", err);
          });
      }
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedRecipe = {
      image: form.image.value,
      title: form.title.value,
      ingredients: form.ingredients.value,
      instructions: form.instructions.value,
      cuisine: form.cuisine.value,
      preparationTime: form.preparationTime.value,
      categories: form.categories.value.split(","),
    };

    fetch(`http://localhost:3000/recipes/${selectedRecipe._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Success", "Recipe updated successfully", "success");
        setSelectedRecipe(null);
        setRecipes((prev) =>
          prev.map((r) =>
            r._id === selectedRecipe._id ? { ...r, ...updatedRecipe } : r
          )
        );
      })
      .catch((err) => {
        console.error("Error updating recipe:", err);
      });
  };

  if (loading)
    return <div ><Spinner></Spinner></div>;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">
        My Recipes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="card bg-white rounded-xl shadow-md overflow-hidden border"
          >
            <img
           
              src={recipe.image || "https://via.placeholder.com/400x200"}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold text-orange-600">
                {recipe.title}
              </h3>
              <p>
                <span className="font-semibold">Cuisine:</span> {recipe.cuisine}
              </p>
              <p>
                <span className="font-semibold">Preparation Time:</span> {" "}
                {recipe.preparationTime} mins
              </p>
              <p>
                <span className="font-semibold">Likes:</span> {recipe.likes || 0}
              </p>
              <div className="flex gap-2 mt-2">
                <button
                  className="btn btn-sm bg-orange-500 text-white"
                  onClick={() => setSelectedRecipe(recipe)}
                >
                  Update
                </button>
                <button
                  className="btn btn-sm bg-red-600 text-white"
                  onClick={() => handleDelete(recipe._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
            <h3 className="text-xl font-bold mb-4 text-orange-600">Update Recipe</h3>
            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                type="text"
                name="image"
                defaultValue={selectedRecipe.image}
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="title"
                defaultValue={selectedRecipe.title}
                placeholder="Title"
                className="input input-bordered w-full"
              />
              <textarea
                name="ingredients"
                defaultValue={selectedRecipe.ingredients}
                placeholder="Ingredients"
                className="textarea textarea-bordered w-full"
              ></textarea>
              <textarea
                name="instructions"
                defaultValue={selectedRecipe.instructions}
                placeholder="Instructions"
                className="textarea textarea-bordered w-full"
              ></textarea>
              <input
                type="text"
                name="cuisine"
                defaultValue={selectedRecipe.cuisine}
                placeholder="Cuisine Type"
                className="input input-bordered w-full"
              />
              <input
                type="number"
                name="preparationTime"
                defaultValue={selectedRecipe.preparationTime}
                placeholder="Preparation Time (mins)"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="categories"
                defaultValue={selectedRecipe.categories.join(", ")}
                placeholder="Categories (comma separated)"
                className="input input-bordered w-full"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedRecipe(null)}
                  className="btn btn-sm bg-gray-400 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-sm bg-green-600 text-white"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyRecipes;
