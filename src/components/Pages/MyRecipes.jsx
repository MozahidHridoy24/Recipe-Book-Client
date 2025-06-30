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
      fetch(
        `https://recipe-book-app-server-blue.vercel.app/recipes/user/${user.email}`
      )
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
        fetch(`https://recipe-book-app-server-blue.vercel.app/recipes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            setRecipes((prev) => prev.filter((r) => r._id !== id));
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

    fetch(
      `https://recipe-book-app-server-blue.vercel.app/recipes/${selectedRecipe._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedRecipe),
      }
    )
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

  if (loading) return <Spinner />;

  return (
    <div className="p-4 max-w-7xl mx-auto bg-base-200">
      <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">
        My Recipes
      </h2>

      <div className="overflow-x-auto">
        <table className="table bg-base-100 border rounded-lg text-base-content">
          <thead>
            <tr className="text-left">
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Cuisine</th>
              <th>Prep Time</th>
              <th>Likes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe, index) => (
              <tr key={recipe._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={recipe.image || "https://via.placeholder.com/100"}
                    alt="Recipe"
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td>{recipe.title}</td>
                <td>{recipe.cuisine}</td>
                <td>{recipe.preparationTime} mins</td>
                <td>{recipe.likes || 0}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => setSelectedRecipe(recipe)}
                    className="btn btn-xs bg-orange-500 text-white hover:bg-orange-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(recipe._id)}
                    className="btn btn-xs bg-red-600 text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-base-100 text-base-content rounded-lg p-6 w-full max-w-lg relative">
            <h3 className="text-xl font-bold mb-4 text-orange-600">
              Update Recipe
            </h3>
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
                  className="btn btn-sm bg-gray-600 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-sm bg-orange-500 text-white"
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
