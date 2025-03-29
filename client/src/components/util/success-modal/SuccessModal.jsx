export default function SucessModal(){
    return(
        <>
         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Content */}
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        {/* SVG Icon */}
        <svg
          className="w-16 h-16 text-green-500 mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2l4 -4M3 12a9 9 0 1118 0a9 9 0 01-18 0z"
          />
        </svg>

        {/* Success Message */}
        <h2 className="text-2xl font-bold mb-4">Success!</h2>
        <p className="text-lg mb-6">Your operation was completed successfully.</p>
      </div>
    </div>

        
        </>
    )
}