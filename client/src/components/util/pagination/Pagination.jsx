export default function Pagination({
    SetCurrentPage,
    page
}){
    return(
        <>
       
       <div className="flex justify-center my-4">
      <nav>
        <ul className="flex list-none">
            <li className="mx-1">
              <button
                className={`px-3 py-1 border bg-black text-white  border-black hover:bg-gray-200`}
              >
                {`<`}
              </button>
            </li>

            <li className="mx-1">
              <button
                className={`px-3 py-1 border bg-white text-black  border-black hover:bg-gray-200`}
              >
                1
              </button>
            </li>

            <li className="mx-1">
              <button
                className={`px-3 py-1 border  bg-white text-black border-black hover:bg-gray-200`}
              >
                ...
              </button>
            </li>

            <li className="mx-1">
              <button
                className={`px-3 py-1 border  bg-white text-black border-black hover:bg-gray-200`}
              >
                {length}
              </button>
            </li>

            <li className="mx-1">
              <button
                className={`px-3 py-1 border bg-black text-white  border-black hover:bg-gray-200`}
                onClick={()=>SetCurrentPage(page + 1)}
              >
                {`>`}
              </button>
            </li>

        </ul>
      </nav>
    </div>

        </>
    )
}

// ${currentPage === page ? 'bg-black text-white' : 'bg-white text-black'}