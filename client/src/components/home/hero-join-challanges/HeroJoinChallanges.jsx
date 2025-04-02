import { Link } from "react-router";

import HeroJoinChallangesCard from "./hero-join-challanges-card/HeroJoinChallangesCard";
import { useLatestParticipants } from "../../../api/participantApi";

export default function HeroJoinChallanges() {
  const { participants } = useLatestParticipants();
  
  return (
    <>
      <section className="relative bg-orange-500 text-black py-20 px-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://fitnessvolt.com/wp-content/uploads/2023/10/Fitness-Myths-Debunked.jpg"
              alt="Join Challenges"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>

          <div className="text-center w-full md:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 md:mb-6">
              Take on Exciting Challenges!
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-medium mb-6 md:mb-8">
              Push your limits, achieve milestones, and compete with the
              community! Join thrilling fitness challenges tailored just for
              you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to={"/fitzone/challenges"}
                className="bg-black hover:bg-gray-800 text-white py-3 px-8 rounded-md text-base sm:text-lg font-bold shadow-lg transition-transform transform hover:scale-105"
              >
                Join Challenges
              </Link>
              <Link
                to={"/fitzone/create-challenge"}
                className="bg-white hover:bg-gray-800 text-black py-3 px-8 rounded-md text-base sm:text-lg font-bold shadow-lg transition-transform transform hover:scale-105"
              >
                Create Challenge
              </Link>
            </div>
          </div>
        </div>
        


        {(participants.length > 0) && (
          <>
            <div className="container mx-auto mt-16">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-black">
                      See Latest Joiners 💪
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {participants.map((c) => (
                      <HeroJoinChallangesCard challange={c} key={c._id} />
                    ))}
                  </div>
                
             
            </div>
          </>
        )}
      </section>
    </>
  );
}
