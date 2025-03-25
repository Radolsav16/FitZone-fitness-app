export default function NoChallanges(){
    return(
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-5">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        No Challenges Yet
      </h2>
      <p className="text-gray-600 text-center mb-8">
        It seems like there are no challenges available right now. Scroll down to create one and inspire others!
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 animate-bounce text-gray-800"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m0 0l-6-6m6 6l6-6"
        />
      </svg>
    </div>
        </>
    )
}