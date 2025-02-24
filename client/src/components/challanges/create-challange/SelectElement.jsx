import OptionElement from "./optionElement";

export default function SelectElement({name,options = [],onChangeHandler,value}){
    return(
        <>
         <select
    name={name}
    className="w-full mt-2 p-2 bg-gray-800 text-white rounded-lg"
    required
    onChange={onChangeHandler}
    value={value}
  >
    {options.map(option => <OptionElement value={option.value} label={option.label} key={option.value} />)}
  </select>
        </>
    )
}