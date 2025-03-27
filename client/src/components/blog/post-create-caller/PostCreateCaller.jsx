import { Link } from "react-router"


export default function PostCreateCaller(){
    return(
        <>
         <Link  to={"/fitzone/post-create"}>
    <div
      className="flex items-center justify-center p-4 bg-blue-100 rounded-lg shadow-md cursor-pointer hover:bg-blue-200 transition"
    >
      {/* SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 text-blue-600 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>

      {/* Text */}
      <p className="text-blue-800 font-bold text-sm md:text-base">
        Create a Blog Post
      </p>
    </div>
    </Link>
        </>
    )
}