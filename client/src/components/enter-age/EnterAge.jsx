import StatInputSection from "../stats-input/StatInputSection";

export default function EnterAge(){
    return(
        <>
        <StatInputSection
         stat={"Age"}
         type={"number"}
         statEnterLabel={"Enter Age"}
         name={"age"}
         />
        </>
    )
}