export default function DetailButton({
    onClick,
    label
}){
    return (
        <>
             <button
              onClick={onClick}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
            >
                {label}
            </button>
        </>
    )
}