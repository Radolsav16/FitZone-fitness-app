import { useState } from "react";
import {Link} from 'react-router-dom'

const challengesData = [
  { id: 1, name: "30-Day Push-Up Challenge",type:"strength", difficulty:"intermediate",duration:"7",equipment:"none",imageUrl: "https://th.bing.com/th/id/OIP.8MV9f9gkpopW16E9ny_feQHaEn?rs=1&pid=ImgDetMain",description:"If you want massive strength you should our push up challange! " },
  { id: 2, name: "5K Running Challenge",type:"cardio", difficulty: "advanced", duration:"14",equipment:"none",imageUrl: "https://th.bing.com/th/id/OIP.1DdKsgh7MNkkE45x_BKRiQHaFo?rs=1&pid=ImgDetMain",description:"Burn some calories with our new running challange!"},
  { id: 3, name: "Yoga Flexibility Challenge", type:"flexibility",difficulty: "beginner", duration:"30",equipment:"yoga mat",imageUrl: "https://th.bing.com/th/id/R.c87375454c963876dd45d3d3b5cdd3a9?rik=kkTGb0bB%2bqP4lg&pid=ImgRaw&r=0",description:"Gain flexability with amazing 30 days challange!" },
];

export default function Challenges() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredChallenges = challengesData.filter((challenge) =>
    challenge.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6 mt-20">
      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search challenges..."
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredChallenges.map((challenge) => (
          <div key={challenge.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <img src={challenge.imageUrl} alt={challenge.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white">{challenge.name}</h3>
              <p className="text-orange-400">Type: {challenge.type}</p>
              <p className="text-orange-400">Difficulty: {challenge.difficulty}</p>
              <p className="text-orange-400">Duration: {challenge.duration}</p>
              <p className="text-orange-400">Equipment: {challenge.equipment}</p>

              <Link className="mt-3 w-full py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition" to={`/fitzone/challanges/details/${challenge.id}`}>
                View Challenge
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
