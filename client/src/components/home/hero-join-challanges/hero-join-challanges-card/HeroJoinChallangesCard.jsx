import { Link } from "react-router";

export default function HeroJoinChallangesCard({ challange }) {


  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:scale-105 transition-transform duration-300">
        <div className="p-4 flex items-center border-b border-gray-200 bg-gray-100">
          <img
            src={challange.userId?.imageUrl}
            alt={challange.userId?.name}
            className="w-12 h-12 rounded-full mr-3 border-2 border-gray-300"
          />
          <div>
            <span className="text-black font-medium text-lg">
              {challange.userId?.name}
            </span>
            <p className="text-gray-500 text-sm">
              Joined {challange.challangeId.name} challenge!
            </p>
          </div>
        </div>

        <img
          src={challange.challangeId.image}
          alt={challange.challangeId.name}
          className="w-full h-48 object-cover"
        />

        <div className="p-4">
          <p className="text-gray-700 italic text-sm bg-gray-50 p-3 rounded-md border border-gray-200">
            "{challange.message}"
          </p>

          <div className="mt-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-black">
              {challange.challangeId.name}
            </h3>
            <Link
              to={`/fitzone/challenges/details/${challange.challangeId._id}`}
              className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
