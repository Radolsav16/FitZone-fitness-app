import  { useEffect ,useState } from "react";
import { getOneExercise } from "../../../service/exerices.js";
import { useParams } from "react-router-dom";
import { useLoadingContext } from "../../../providers/LoadingProvider.jsx";

export default function ExerciseDetails() {

    const [exercise,SetExercise] = useState({});
    const {showLoading,hideLoading} = useLoadingContext()

    let params = useParams();

    const id = params.id;


      useEffect(()=>{
            (async () =>{
                showLoading()
                const exercise = await getOneExercise(id);
                hideLoading()
                SetExercise(exercise)
            })()
        },[])

    return (
        <div className="max-w-4xl mx-auto p-8 mt-20">
          <h1 className="text-4xl font-bold text-center mb-6">{exercise.name}</h1>
          <div className="relative mb-6">
            <img
              src={exercise.gifUrl}
              alt={exercise.name}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          <p className="text-lg text-gray-700 mb-6">{exercise.instructions}</p>
        </div>
      );
}
