import { useState , useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import DetailButton from "./button/DetailButton";
import  styles  from './Button.module.css'
export default function ChallangeDetails(){
   const [data,setData] = useState({})
   const navigate = useNavigate();
   const isSave = false;
   const [save,setSave] = useState(isSave);

   const params = useParams();

   const {id} = params;

  


   useEffect(() => {
    (async ()=>{
     const res = await axios.get(`http://localhost:3030/challanges/${id}`,{
       headers:{
         'Content-Type':'application/json'
       }
     });
     const result = await res.data;
     setData(result)
    })()
   }, []);

   useEffect(()=>{
      if(!save){
        return;
      }
      console.log('Saved!')
   },[save])


   const deleteChallange = async () =>{
    try {
      await axios.delete(`http://localhost:3030/challanges/${id}`);
      navigate('/fitzone/challanges')
    } catch (err) {
      navigate('/404');
    }
   }



    return(
        <>
<div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-20">
      {/* Flexbox Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Challenge Image */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* Challenge Details */}
        <div className="w-full md:w-2/3 md:pl-6">
          <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
          <p className="text-gray-600 mb-4">{data.description}</p>

          <div className="space-y-4">
            <p><strong className="font-medium">Type:</strong> {data.type}</p>
            <p><strong className="font-medium">Difficulty:</strong> {data.difficulty}</p>
            <p><strong className="font-medium">Duration:</strong> {data.duration} days</p>
            <p><strong className="font-medium">Equipment:</strong> {data.equipment}</p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            {/* Edit Button */}
            <Link
              to={`/fitzone/challanges/edit/${data._id}`}
              className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Edit Challenge
            </Link>
            <DetailButton label={"Delete Challange"} onClick={deleteChallange}  />
            <button className={styles['save-button']}>
             Join
            </button>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}