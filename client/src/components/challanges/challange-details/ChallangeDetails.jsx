import { Link, useParams } from "react-router-dom";
import { useChallange, useDeleteChallange, useJoinChallange } from "../../../api/challangeApi";
import IsSureModal from "../../util/is-sure-modal/IsSureModal";
import { useUserContext } from "../../../contexts/UserContext";
import JoinChallanges from "../join-challanges/JoinChallanges";
import CreateChallangeCaller from "../create-challange-caller/CreateChallangeCaller";
import ChallangeParticipants from "../challange-participants/ChallangeParticipants";
import { useParticipates } from "../../../api/participantApi";




export default function ChallangeDetails(){
   const params = useParams();
   const { id:currentUserId } = useUserContext()
   const {id} = params;

   const { challange ,setIsParticipants,isParticipants} = useChallange(id)

   const { deleteChallange , showModal , cancel ,setShowModal} = useDeleteChallange(id)

   const {joinChallange , showJoinForm , setShowJoinForm,toggleJoin} = useJoinChallange(id);

   const { participates , setParticipants } = useParticipates(id)


   const isJoin = participates.filter(p => p.userId?._id === currentUserId).length ===  0 ? false : true; 


    return(
        <>

 {showModal &&  <IsSureModal 
 cancel = {cancel}
  deleteFunc = {deleteChallange}
  navigatePath={'/fitzone/challenges'}
  text={'Are you sure you  want to delete this challenge?'}
  preText={"Delete Challenge"}
  />}

  {showJoinForm ? <JoinChallanges 
  toggleJoin={toggleJoin} 
  setParticipants = {setParticipants} 
  joinChallange={joinChallange}
  challangeId={id}  /> : <> <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-20">
     
     {/* Flexbox Container */}
     <div className="flex flex-col md:flex-row items-center md:items-start">
       {/* Challenge Image */}
       <div className="w-full md:w-1/3 mb-6 md:mb-0">
         <img
           src={challange.image}
           alt={challange.name}
           className="w-full h-64 object-cover rounded-lg"
         />
       </div>

       {/* Challenge Details */}
       <div className="w-full md:w-2/3 md:pl-6">
         <h1 className="text-3xl font-bold mb-4">{challange.name}</h1>
         <p className="text-gray-600 mb-4">{challange.description}</p>

         <div className="space-y-4">
           <p><strong className="font-medium">Type:</strong> {challange.type}</p>
           <p><strong className="font-medium">Difficulty:</strong> {challange.difficulty}</p>
           <p><strong className="font-medium">Duration:</strong> {challange.duration} days</p>
           <p><strong className="font-medium">Equipment:</strong> {challange.equipment}</p>
         </div>

         <div className="mt-6 flex space-x-4">

          {currentUserId ?
          
            challange.ownerId === currentUserId ?  
           <>
           <Link
             to={`/fitzone/challenges/edit/${challange._id}`}
             className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
           >
             Edit Challenge

           </Link>
           <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300" onClick={()=>setShowModal(!showModal)}>Delete</button>
            </> :
            <>
             {isJoin ? <p className="text-black">You are already joined participant!</p>:<button className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300" onClick={()=>setShowJoinForm(!showJoinForm)}>
            Join
           </button> }
            
           </>
           :  ""

          }
         </div>
       </div>
     </div>
   </div> 


 

</>


}



{participates.length === 0  ? <div className="flex flex-col items-center justify-center h-96 bg-gray-100 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">No Participants Yet!</h2>
      <p className="text-gray-600 text-center mb-6">
        Be the first to join this challenge and inspire others to participate!
      </p>
      {currentUserId ?  <button
        onClick={()=>setShowJoinForm(!showJoinForm)}
        className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition"
      >
        Be the First Participant
      </button> : <Link
       to={"/fitzone/register"}
        className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition"
      >
        Be the First Participant
      </Link> }
     
    </div>:  <div className="bg-gray-100 rounded-lg shadow-md p-4 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-bold text-black-800">
          Curious about the participants?
        </h3>
        <p className="text-black-600">See what others are saying about this challenge!</p>
      </div>
     
      
      <div className="flex items-center gap-2">

        

{[...participates.map(p => p.userId)].slice(-3).map(participate => 

<Link to={`/fitzone/profile/${participate._id}`}><img
    key={participate._id}
    src={participate.imageUrl}
    alt={participate.name}
    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
  />
  </Link>
)}




<button
  onClick={()=>setIsParticipants(!isParticipants)}
  className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
  
>
    {isParticipants ? 'Hide Participants':'View Participants'}
 
</button>

    </div>
    </div>
        

}




{isParticipants && 

<ChallangeParticipants participates = {participates}/>}

      <CreateChallangeCaller />
  


        </>
    )
}