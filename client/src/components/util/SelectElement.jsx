import OptionElement from "./optionElement";

export default function SelectElement({name,options = [],onChangeHandler,value}){
    return(
        <>
         <select
    name={name}
     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"

    onChange={onChangeHandler}
    value={value}

  >
    {options.map(option => <OptionElement value={option.value} label={option.label} key={option.value}  />)}
  </select>
        </>
    )
}