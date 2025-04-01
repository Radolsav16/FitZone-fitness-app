import { Link } from "react-router-dom"
import { DateConverter } from "../../../utils/DateConverter"
import { useUserContext } from "../../../contexts/UserContext"
import { useLikePost } from "../../../api/blogApi"


export default function BlogCard({
    post
}){
  const {id:userId} = useUserContext()
  const {like ,likes} = useLikePost(post._id,userId)
 
   
    return(
        <>
    
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
  {/* Image Section */}
  <img
    src={post.image}
    alt={post.name}
    className="w-full h-48 object-cover"
  />

  {/* Content Section */}
  <div className="p-4">
    {/* User Info Section */}
    <div className="flex items-center mb-4">
      <Link to={`/fitzone/profile/${post.author._id}`}><img
        src={post.author.imageUrl}
        alt="User Profile"
        className="w-10 h-10 rounded-full object-cover mr-3"
      />
      </Link>
      <p className="text-sm text-gray-600">
        By <span className="font-bold">{post.author.name}</span> on {DateConverter(post.createdAt)}
      </p>
    </div>

    {/* Title and Content */}
    <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
    <p className="text-gray-700 mb-4">{post.description}</p>

    {/* Read More Button */}
    <Link
      to={`/fitzone/blog-details/${post._id}`}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
    >
      Read More
    </Link>
    <div className="flex items-center space-x-4 mt-4">

    {(userId && userId != post.author._id && !post.likes.includes(userId)) &&  
    <button
      onClick={like}  
      className="flex items-center px-4 py-2 bg-white-500 text-black rounded-full hover:bg-white-600 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5 mr-2"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      Like
    </button>
      
   }
    <p className="text-sl text-gray-600">
        <strong>{likes}</strong> likes
      </p>

      </div> 
  </div>
</div>

        
        </>
    )
}