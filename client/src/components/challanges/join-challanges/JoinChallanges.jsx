import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../contexts/UserContext";
import { useUserParticipants } from "../../../api/participantApi";

export default function JoinChallanges({
  toggleJoin,
  joinChallange,
  challangeId,
  setParticipants,

}) {
  const navigate = useNavigate();
  const { id } = useUserContext();


  const joinChallangeHandler = async (formData) => {
    const { message } = Object.fromEntries(formData);
    const participant = await joinChallange(id, challangeId, message);
    setParticipants(oldState => [...oldState,participant]);
    toggleJoin();
    navigate(`/fitzone/challenges/details/${challangeId}`);
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <form
          className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto"
          action={joinChallangeHandler}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Join the Challenge</h2>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={toggleJoin}
            >
              ✕
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter your joining message..."
            name="message"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Join Now
          </button>
        </form>
      </div>
    </>
  );
}
