export default function OptionElement({
    value,
    label
}){
    return(
        <>
          <option value={value}>{label}</option>
        </>
    )
}