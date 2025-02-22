import {Link} from 'react-router-dom'

export default function ChallangeCard({
    challenge
}){
    return(
        <>
            <div key={challenge.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <img src={challenge.image} alt={challenge.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white">{challenge.name}</h3>
              <p className="text-orange-400">Type: {challenge.type}</p>
              <p className="text-orange-400">Difficulty: {challenge.difficulty}</p>
              <p className="text-orange-400">Duration: {challenge.duration}</p>
              <p className="text-orange-400">Equipment: {challenge.equipment}</p>

              <Link className="mt-3 w-full py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition" to={`/fitzone/challanges/details/${challenge._id}`}>
                View Challenge
              </Link>
            </div>
          </div>

        </>
    )
}