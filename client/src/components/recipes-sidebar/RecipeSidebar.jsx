export default function RecipeSidebar(){
    const categories = ["Dessert", "Main Course", "Appetizer", "Side Dish"];
    return(
        <>
             <div className="bg-gray-100 p-5 rounded-lg shadow-md w-60">
      <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">
        Filter by Recipe Type
      </h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onCategorySelect(category)}
            className="cursor-pointer px-4 py-2 bg-gray-200 hover:bg-orange-500 hover:text-white rounded-md transition"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
        </>
    )
}