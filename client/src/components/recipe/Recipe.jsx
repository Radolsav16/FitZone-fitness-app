import { useState } from "react";
import Pagination from "../pagination/Pagination";
import RecipeSidebar from "../recipes-sidebar/RecipeSidebar";


export default function Recipe(){
    const [isLike,setLike] = useState(false)
    const [recipes, setRecipes] = useState([
        {
          id: 1,
          name: "Spaghetti Carbonara",
          image: "https://www.sipandfeast.com/wp-content/uploads/2022/09/spaghetti-carbonara-recipe-snippet.jpg",
          likes: 0,
        },
        {
          id: 2,
          name: "Chicken Teriyaki",
          image: "https://www.sipandfeast.com/wp-content/uploads/2022/09/spaghetti-carbonara-recipe-snippet.jpg",
          likes: 0,
        },
        {
          id: 3,
          name: "Vegan Tacos",
          image: "https://www.sipandfeast.com/wp-content/uploads/2022/09/spaghetti-carbonara-recipe-snippet.jpg",
          likes: 0,
        },
      ]);
    
      const handleLike = (id) => {
        setRecipes((prevRecipes) =>
          prevRecipes.map((recipe) =>
            recipe.id === id ? { ...recipe, likes: recipe.likes + 1 } : recipe
          )
        );
      };
    
      const handleViewDetails = (id) => {
        alert(`Viewing details for recipe ID: ${id}`);
      };
    
      return (
        <div className="flex flex-col items-center p-5 mt-20">
               <RecipeSidebar />
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Recipes 🥗</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center"
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                  {recipe.name}
                </h2>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleViewDetails(recipe.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Pagination />
        </div>
      );
}