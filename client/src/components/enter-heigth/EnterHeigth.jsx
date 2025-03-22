import StatInputSection from "../stats-input/StatInputSection";

export default function EnterHeigth(){
    return(
        <>
        <StatInputSection
         stat={"Heigth"}
         type={"number"}
         statEnterLabel={"Enter Heigth in cm"}
         name={"Heigth"}
         />
        </>
    )
}