import StatInputSection from "../stats-input/StatInputSection";

export default function EnterWeigth(){
    return(
        <>
        <StatInputSection
         stat={"Weigth"}
         type={"number"}
         statEnterLabel={"Enter Weigth in kg"}
         name={"weigth"}
         />
        </>
    )
}