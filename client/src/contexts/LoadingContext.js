import { useContext } from "react"
import { loadingContext } from "../providers/LoadingProvider"





export const useLoadingContext = () =>{
    return useContext(loadingContext)
}