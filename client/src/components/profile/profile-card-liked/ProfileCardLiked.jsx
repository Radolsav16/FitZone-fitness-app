import { Link } from "react-router"


export default function ProfileCardLiked({
    likedPost
}){
    return(
        <>
         <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Liked Posts</h2>
        {likedPost?.length > 0 ? (
          <ul className="space-y-2">
            {likedPost.map((post) => (
              <Link to={`/fitzone/blog-details/${post._id}`} key={post._id}>
              <li className="p-4 bg-white rounded-lg shadow-sm border flex items-center gap-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-12 h-12 rounded-md object-cover"
              />
              <div>
                <p className="font-bold text-black-700">{post.title}</p>
                <p className="text-gray-500">{post.description}</p>
              </div>
            </li>
            </Link>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No liked posts yet!</p>
        )}
      </div> 
        
        </>
    )
}