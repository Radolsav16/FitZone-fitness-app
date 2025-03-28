import { Link, useNavigate, useParams } from "react-router"
import { useUserContext } from "../../contexts/UserContext"
import { useUser } from "../../api/userApi"

export default function Profile(){
    const {id} = useParams()
    const {user} = useUser(id)
    const navigate = useNavigate()

    const {id : currUser,userLogoutHandler} = useUserContext()
    

    const joinedChallenges = [];
    
    

    



    
     
    return(
        <>
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-20">
       <div className="flex items-center mb-8">
        <img
          src={user.imageUrl}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
        />
        <div className="ml-6">
          <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Liked Posts</h2>
        {user.likedPost?.length > 0 ? (
          <ul className="space-y-2">
            {user.likedPost.map((post) => (
              <Link to={`/fitzone/blog-details/${post?._id}`}>
              <li key={post._id} className="p-4 bg-white rounded-lg shadow-sm border">
                <p className="font-bold text-gray-700">{post?.title}</p>
                <p className="text-gray-500">{post?.description}</p>
              </li>
              </Link>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No liked posts yet.</p>
        )}
      </div> 
      { <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Saved Challenges</h2>
        {user.savedChallenges?.length > 0 ? (
          <ul className="space-y-2">
            {user.savedChallenges.map((challenge, index) => (
              <li key={index} className="p-4 bg-white rounded-lg shadow-sm border">
                <p className="font-bold text-gray-700">{challenge?.title}</p>
                <p className="text-gray-500">{challenge?.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No saved challenges yet.</p>
        )}
      </div> }

      
       <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Joined Challenges</h2>
        {joinedChallenges.length > 0 ? (
          <ul className="space-y-2">
            {joinedChallenges.map((challenge, index) => (
              <li key={index} className="p-4 bg-white rounded-lg shadow-sm border">
                <p className="font-bold text-gray-700">{challenge.title}</p>
                <p className="text-gray-500">{challenge.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No joined challenges yet.</p>
        )}
      </div>


        {user._id === currUser &&   
        <div className="flex justify-end">
        <button
          // onClick={onLeaveAccount}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Edit
        </button>
        <button
          onClick={()=>{
            userLogoutHandler()
             navigate('/')}}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition ml-3"
        >
          Leave Account
        </button>
      </div>
    
}
</div> 
 
   

        </>
    )
}


