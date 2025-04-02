import { Link } from "react-router";

const filters = ["All", "Fitness", "Health", "Nutrition", "Motivation"];

export default function BlogFilters() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {filters.map((topic, index) => (
          <Link
            to={
              topic == "All"
                ? "/fitzone/blog"
                : `/fitzone/blog/?searchedBy=${topic.toLowerCase()}`
            }
            key={index}
            className={`px-4 py-2 rounded-lg ${
              true
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
          >
            {topic}
          </Link>
        ))}
      </div>
    </>
  );
}
