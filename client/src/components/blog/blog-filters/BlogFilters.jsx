const filters = ["All", "Fitness", "Health", "Nutrition"]


export default function BlogFilters(){
    return(
        <>

<div className="flex flex-wrap justify-center gap-4 mb-6">
  {filters.map((topic, index) => (
    <button
      key={index}
      className={`px-4 py-2 rounded-lg ${
        true
          ? "bg-blue-500 text-white"
          : "bg-gray-300 text-gray-700 hover:bg-gray-400"
      }`}
    >
      {topic}
    </button>
  ))}
  </div>
        
        </>
    )
}

