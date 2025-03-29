import { Link } from "react-router";
import { useChallanges , useUserJoinedChallanges , useUserSavedChallanges } from "../api/challangeApi";
import ChallangeCard from "../components/challanges/ChallangeCard";
import NoChallanges from "../components/challanges/no-challanges/NoChallanges";
import CreateChallangeCaller from "../components/challanges/create-challange-caller/CreateChallangeCaller";

import { useUserContext } from "../contexts/UserContext";

export default function Challanges(){
    const { email , id } = useUserContext()


  const { challanges } = useChallanges()

  
  const {userSavedChallanges,setUserSavedChallanges} = useUserSavedChallanges(id);
  const {userJoinedchallanges} = useUserJoinedChallanges(id);
    return(
        <>
        <div className="max-w-6xl mx-auto p-6 mt-20">
  {email &&  <div className="flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md mb-10">
      <Link className="text-lg font-semibold text-gray-300">Challenges Joined:</Link>
      <span className="ml-3 text-2xl font-extrabold text-orange-400">{userJoinedchallanges}</span>
      <Link className="text-lg font-semibold text-gray-300 ml-5">Challenges Saved:</Link>
      <span className="ml-3 text-2xl font-extrabold text-orange-400">{userSavedChallanges}</span>
    </div>}

  {challanges.length > 0 ?  <div className="mb-6">
        <input
          type="text"
          placeholder="Search challenges..."
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>: <NoChallanges />}
    

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {challanges.map((challange) => (
            <ChallangeCard key={challange._id} challenge={challange} setUserSavedChallanges = {setUserSavedChallanges}  />
        ))}
      </div>
    </div>

          <CreateChallangeCaller />
        
        </>
    )
}