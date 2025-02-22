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
//     <div className="max-w-6xl mx-auto p-6 mt-20">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//          {data.length > 0 ? (
//           <>
//              <div className="mb-6">
//              <input
//                type="text"
//                placeholder="Search challenges..."
//                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
//              />
//            </div>
//           {data.map((challange) => (
//             <ChallangeCard key={challange._id} challenge={challange} />
//           ))}
//           </>
//         ) : 
//           <>
//                  <h1>There is no challanges yet!</h1>
//           </>
// }
//           </div>
//           </div>
<>
<div className="max-w-6xl mx-auto p-6 mt-20">
  {data.length > 0 ?   <div className="mb-6">
        <input
          type="text"
          placeholder="Search challenges..."
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>:" "}
      {/* Search Input */}
    

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data.map((challange) => (
            <ChallangeCard key={challange._id} challenge={challange} />
        ))}
      </div>
    </div>
</>

      )}
