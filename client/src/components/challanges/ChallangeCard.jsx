import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";

import { useUserContext } from "../../contexts/UserContext";
import { useSaveChallange } from "../../api/challangeApi";

export default function ChallangeCard({ challenge, setUserSavedChallanges }) {
  const { email, id } = useUserContext();
  const { saved, saveChallange } = useSaveChallange(id, challenge._id);

  return (
    <>
      <div className="relative bg-white text-black rounded-lg shadow-lg overflow-hidden w-80 border-4 ">
        {email && (
          <>
            <button
              onClick={() => {
                if (saved) {
                  return;
                }
                saveChallange();
                setUserSavedChallanges((oldState) => oldState + 1);
              }}
              className="absolute top-4 right-4 p-2 rounded-full border-2  transition"
              style={{
                backgroundColor: saved ? "black" : "white",
                color: saved ? "white" : "black",
              }}
            >
              <FaBookmark size={27} />
            </button>
          </>
        )}

        <img
          src={challenge.image}
          alt={challenge.title}
          className="w-full h-48 object-cover border-b-4 border-black"
        />

        <div className="p-4">
          <p className="text-xl font-bold text-black">{challenge.name}</p>

          <Link
            to={`/fitzone/challenges/details/${challenge._id}`}
            className="mt-4 block w-full py-3 bg-blue-900 text-white font-bold rounded-lg text-lg border-2 hover:bg-blue-800 transition text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
}
