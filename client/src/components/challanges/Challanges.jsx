import { useEffect, useState } from "react";
import ChallangeCard from "./ChallangeCard";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Challenges() {
  const [data, setData] = useState([]);

  useEffect(() => {
   (async ()=>{
    const res = await axios.get('http://localhost:3030/challanges',{
      headers:{
        'Content-Type':'application/json'
      }
    });
    const result = await res.data;
    setData(result)
   })()
  }, []);

  return (
<>
<div className="max-w-6xl mx-auto p-6 mt-20">
<div className="flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md mb-10">
      <Link className="text-lg font-semibold text-gray-300">Challenges Joined:</Link>
      <span className="ml-3 text-2xl font-extrabold text-orange-400">10</span>
      <Link className="text-lg font-semibold text-gray-300 ml-5">Challenges Saved:</Link>
      <span className="ml-3 text-2xl font-extrabold text-orange-400">10</span>
    </div>
  {data.length > 0 ?  <div className="mb-6">
        <input
          type="text"
          placeholder="Search challenges..."
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>:" "}
    

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data.map((challange) => (
            <ChallangeCard key={challange._id} challenge={challange} />
        ))}
      </div>
    </div>

    <section className="relative bg-gradient-to-r from-black via-gray-900 to-blue-900 text-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Ready to Push Your Limits? 🚀
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-gray-300">
          Take control of your fitness journey. Create your own challenge and inspire yourself to achieve more!
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Link
            to="/fitzone/create-challenge"
            className="inline-block bg-white text-black font-bold text-lg py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Create Your Challenge
          </Link>
        </div>
      </div>

     
    
    </section>


 
</>

      )}
