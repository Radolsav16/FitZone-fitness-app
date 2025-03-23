import { Link } from "react-router"

export default function HeroJoinChallanges(){
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

      {/* Featured Challenges Section */}
      <div className="container mx-auto mt-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-black">Most Joined Challenges</h2>
  
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Challenge Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="https://th.bing.com/th/id/OIP.S0YPMqSDSoGYYb4Zk_atagHaD4?rs=1&pid=ImgDetMain"
              alt="Challenge 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black">30-Day Fitness Challenge</h3>
              <p className="text-gray-600 mt-2">
                Achieve your fitness goals with structured workouts for 30 days!
              </p>
              <button className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
                View Details
              </button>
            </div>
          </div>

          {/* Challenge Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="https://th.bing.com/th/id/OIP.S0YPMqSDSoGYYb4Zk_atagHaD4?rs=1&pid=ImgDetMain"
              alt="Challenge 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black">5K Running Challenge</h3>
              <p className="text-gray-600 mt-2">
                Train, compete, and conquer the 5K challenge with the community.
              </p>
              <button className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
                View Details
              </button>
            </div>
          </div>

          {/* Challenge Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="https://th.bing.com/th/id/OIP.S0YPMqSDSoGYYb4Zk_atagHaD4?rs=1&pid=ImgDetMain"
              alt="Challenge 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black">Strength Training Challenge</h3>
              <p className="text-gray-600 mt-2">
                Build your strength and endurance with this 4-week program!
              </p>
              <button className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}