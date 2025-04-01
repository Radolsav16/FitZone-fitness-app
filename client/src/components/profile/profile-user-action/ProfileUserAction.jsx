export default function ProfileUserAction({
    logoutHandler
}){
    return(
        <>
            <div className="flex justify-end">
      
        <button
          onClick={logoutHandler}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition ml-3"
        >
          Leave Account
        </button>
      </div>
        
        </>
    )
}