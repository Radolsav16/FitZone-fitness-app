import { Link } from "react-router"

import HeroJoinChallangesCard from "./hero-join-challanges-card/HeroJoinChallangesCard"
import { useLatestParticipants } from "../../../api/participantApi"

export default function HeroJoinChallanges(){
   const  {challanges} = useLatestParticipants()


    
    return (
        <>
         <section className="relative bg-orange-500 text-black py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
          <img
            src="https://fitnessvolt.com/wp-content/uploads/2023/10/Fitness-Myths-Debunked.jpg"
            alt="Join Challenges"
            className="rounded-xl shadow-2xl w-full h-auto"
          />
        </div>
        
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Take on Exciting Challenges!
          </h1>
          <p className="text-lg md:text-xl font-medium mb-8">
            Push your limits, achieve milestones, and compete with the community! Join thrilling fitness challenges tailored just for you.
          </p>
          <Link 
          to={'/fitzone/challenges'}
          className="bg-black hover:bg-gray-800 text-white py-4 px-10 rounded-md text-lg font-bold shadow-lg transition-transform transform hover:scale-105 mt-5">
            Join Challenges
          </Link>

          <Link 
          to={'/fitzone/create-challenge'}
          className="bg-white hover:bg-gray-800 text-black py-4 px-10 rounded-md text-lg font-bold shadow-lg transition-transform transform hover:scale-105 ml-5 mt-5">
            Create Challenge
          </Link>
        </div>

       
       
      </div>
  
      {challanges.length > 0 && 
      <>
      <div className="container mx-auto mt-16">
        {challanges.userId && 
        <>
        <div className="text-center mb-8">
    <h2 className="text-4xl font-bold text-black">See Latest Joiners 💪</h2>
  </div>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {
      challanges.map(c => <HeroJoinChallangesCard challange = {c} key={c._id}/>)
      }
      </div>
  
      </>
      }
  
      </div>
      
      </>}
    </section>
        </>
    )
}