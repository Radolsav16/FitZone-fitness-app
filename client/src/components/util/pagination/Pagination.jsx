import { scrollTop } from "../../../utils/scroll";

export default function Pagination({ SetCurrentPage, page, SetOffset }) {
  return (
    <>
      <div className="flex justify-center my-4 items-center">
     
        <button
          onClick={() => {
            SetCurrentPage(page - 1);
            SetOffset((oldState) => oldState - 9);
          }}
          disabled={page === 1}
          className="mx-1 px-3 py-1 border bg-black text-white border-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          &lt;
        </button>

        <span className="mx-1 px-3 py-1 border bg-white text-black border-black">
          {page}
        </span>

        <span className="mx-1 px-3 py-1 border bg-white text-black border-black">
          ...
        </span>

        <button
          onClick={() => {
            SetCurrentPage(page + 1);
            SetOffset((page - 1) * 9);
            scrollTop()
          }}
          className="mx-1 px-3 py-1 border bg-black text-white border-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          &gt;
        </button>
      </div>
    </>
  );
}
