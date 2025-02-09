import { useEffect , useState  } from "react";
import { Link, useParams } from "react-router-dom";
import { getTargetMuscleExercises } from "../../service/exerices.js";

export default function TargetExercise() {

    const [exercises,SetExercises] = useState([]);

    const params = useParams();

    const target = params.target;

    useEffect(()=>{
        (async () =>{
            const exercises = await getTargetMuscleExercises(target);
            console.log(exercises)
            SetExercises(exercises)
        })()
    },[])

  return (
    <div className="max-w-6xl mx-auto p-8 mt-20">
      <h1 className="text-4xl font-bold text-center mb-8">{target}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="bg-white shadow-lg rounded-lg p-6">
            <img src={exercise.gifUrl} alt={exercise.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-bold mb-2">{exercise.name}</h2>
            <p className="text-gray-600 mb-4">{exercise.instructions}</p>
            <div className="flex justify-between items-center">
              <Link
              to={`/fitzone/exercises/${exercise.id}`}
                className= "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
