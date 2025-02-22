export default function Input({
    name,
    type,
    onChangeHandler
}){
    return(
        <>
              <input
                id={name}
                name={name}
                type={type}
                onChange={onChangeHandler}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border-2 border-gray-500 placeholder:text-gray-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-600 sm:text-sm"
              />
        </>
    )
}