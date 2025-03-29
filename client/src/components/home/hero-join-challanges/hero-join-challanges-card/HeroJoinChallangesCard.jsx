import { Link } from "react-router-dom";

export default function HeroJoinChallangesCard({
    challange
}){
    return(
        <>

    {/* Challenge Card */}
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:scale-105 transition-transform duration-300">
      <div className="p-4 flex items-center border-b border-gray-200 bg-gray-100">
        {/* User Info (Joiner) */}
        <img
          src={challange.userId?.imageUrl} // Replace with actual user profile URL
          alt={challange.userId?.name}
          className="w-12 h-12 rounded-full mr-3 border-2 border-gray-300"
        />
        <div>
          <span className="text-black font-medium text-lg">{challange.userId?.name}</span>
          <p className="text-gray-500 text-sm">Joined {challange.challangeId.name} challenge!</p>
        </div>
      </div>
      
      {/* Challenge Image */}
      <img
        src={challange.challangeId.image}
        alt={challange.challangeId.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        {/* Participant's Message */}
        <p className="text-gray-700 italic text-sm bg-gray-50 p-3 rounded-md border border-gray-200">
          "{challange.message}"
        </p>

        {/* Challenge Name & Button */}
        <div className="mt-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-black">{challange.challangeId.name}</h3>
          <Link 
          to={`/fitzone/challenges/details/${challange.challangeId._id}`}
          className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
            View Details
          </Link>
        </div>
      </div>
    </div>
  

        </>
    )
}