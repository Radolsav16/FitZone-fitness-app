import React from "react";
import { Link } from "react-router-dom";

export default function ExerciseSearch() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center mt-20">
      <h1 className="text-4xl font-bold mb-8">Exercise Library 🏋️</h1>
      <p className="text-gray-600 mb-6">
        Select a muscle group to explore exercises tailored for it.
      </p>
      <div className="grid grid-cols-2 gap-6 mb-8">
        <Link
        to={"/fitzone/triceps/exercises"}
          className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 rounded-lg shadow-lg transition duration-300"
        >
          Triceps
        </Link>
        <Link
         to={"/fitzone/biceps/exercises"}
          className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 rounded-lg shadow-lg transition duration-300"
        >
          Biceps
        </Link>
        <Link
         to={"/fitzone/lats/exercises"}
          className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 rounded-lg shadow-lg transition duration-300"
        >
          Back
        </Link>
        <Link
         to={"/fitzone/quads/exercises"}
          className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 rounded-lg shadow-lg transition duration-300"
        >
          Leg 
        </Link>
      </div>
      <div className="flex justify-center">
        <Link
         to={"/fitzone/abs/exercises"}
          className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 px-16 rounded-lg shadow-lg transition duration-300"
        >
          Core/Abs Exercises
        </Link>
      </div>
    </div>
  );
}
