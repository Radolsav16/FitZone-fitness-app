import { Link } from "react-router-dom";

export default function HeroExercise(){
    return(
        <>
<section className="relative bg-orange-500 text-white py-20 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
            Boost Your Fitness with Exercises
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Discover the best exercises tailored for all fitness levels. From strength training to flexibility, enhance your workout routine with our expert-guided plans.
          </p>
          <Link 
          to={'/fitzone/exercise-search'}
          className="bg-black hover:bg-gray-800 text-orange-500 py-3 px-10 rounded-md text-lg font-semibold shadow-md transition-transform transform hover:scale-105">
            Browse Exercises
          </Link>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://th.bing.com/th/id/R.920252bb0a73799ec6069e4ddbeb40c1?rik=A1mdvEk%2fecuipg&riu=http%3a%2f%2fmetrifit.com%2fwp-content%2fuploads%2f2017%2f10%2fexercise_program.jpg&ehk=86bWhvVjZFpOGN5njaNrxlXqIaUgWzDWEvZp2KLwZCk%3d&risl=&pid=ImgRaw&r=0"
            alt="Exercises"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
        
        </>
    )
}