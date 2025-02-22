import OptionElement from "./optionElement";

export default function SelectElement({name,options = [],onChangeHandler}){
    return(
        <>
         <select
    name={name}
    className="w-full mt-2 p-2 bg-gray-800 text-white rounded-lg"
    required
    onChange={onChangeHandler}
  >
    {options.map(option => <OptionElement value={option.value} label={option.label} key={option.value} />)}
  </select>
        </>
    )
}