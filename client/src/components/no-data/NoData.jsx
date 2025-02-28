import { Link } from "react-router-dom"
export default function NoData({
    preText,
    mainText
}){
    return(
        <>
         <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-900 text-white">
      <div className="text-center p-8 max-w-lg">
        <h1 className="text-3xl font-bold mb-4">{preText}</h1>
        <p className="text-gray-400 mb-6">
          {mainText}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
                      <Link
                        to="/"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Go back home
                      </Link>

                      <Link
                        to="/fitzone/post-create"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Create Post
                      </Link>
                     
                    </div>
      </div>
    </div>
        </>
    )
}