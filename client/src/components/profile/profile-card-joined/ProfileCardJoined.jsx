import { Link } from "react-router"


export default function ProfileCardJoined({
    joinedChallanges
}){
    return(
        <>
             <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Joined Challenges</h2>
        {joinedChallanges?.length > 0 ? (
          <ul className="space-y-2">
            {joinedChallanges.map((challenge) => (
              <Link to={`/fitzone/challenges/details/${challenge._id}`} key={challenge._id}>
           <li className="p-4 bg-white rounded-lg shadow-sm border flex items-center gap-4">
           <img
             src={challenge.image}
             alt={challenge.title}
             className="w-12 h-12 rounded-md object-cover"
           />
           <div>
             <p className="font-bold text-black-700">{challenge.name}</p>
             <p className="text-gray-500">{challenge.description}</p>
           </div>
         </li>
         </Link>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No joined challenges yet!</p>
        )}
      </div>
        </>
    )
}