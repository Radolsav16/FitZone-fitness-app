import { Link } from "react-router";
export default function ChallangeParticipants({ participates }) {
  return (
    <>
      <div className="p-8 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          Challenge Participants
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {participates.map((p) => (
            <div
              key={p.userId._id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            >
              <Link to={`/fitzone/profile/${p.userId._id}`}>
                <img
                  src={p.userId.imageUrl}
                  alt={p.userId.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
              </Link>
              <h3 className="text-lg font-semibold text-gray-800">
                {p.userId.name}
              </h3>
              <p className="text-gray-600 mt-2">{p.message}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
