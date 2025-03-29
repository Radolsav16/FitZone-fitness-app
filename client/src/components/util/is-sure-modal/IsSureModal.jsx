import { useNavigate } from "react-router";

export default function IsSureModal({
    cancel,
    deleteFunc,
    text,
    navigatePath,
    preText
}){
    const navigate = useNavigate()

    
    return(
        <>
           <div className="flex justify-center items-center min-h-screen">
      <button 
        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        onClick={deleteFunc}
      >
        Delete Challenge
      </button>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{preText}</h2>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={cancel}
              >
                ✕
              </button>
            </div>
            <p className="text-gray-600">{text}</p>
            <div className="mt-6 flex justify-end gap-3">
              <button  onClick={cancel}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
               
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
               onClick={()=>{
                deleteFunc()
                navigate(navigatePath);
            }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
    </div>
        </>
    )
}