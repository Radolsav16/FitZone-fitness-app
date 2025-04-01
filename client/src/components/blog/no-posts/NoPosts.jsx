export default function NoPosts(){
    return(
        <>
              <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 w-full text-center p-5">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
              No Post Yet!
            </h2>
            <p className="text-blue-600 mb-8">
              It seems like there are no post. Scroll
              down to create one!
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 animate-bounce text-blue-700"
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