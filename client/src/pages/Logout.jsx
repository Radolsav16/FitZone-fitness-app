
import { Navigate } from "react-router-dom";
import { useLogout } from "../api/authApi";


export function Logout(){
    const {isLogOut }  = useLogout()

    return(
        isLogOut 
        ? 
        <Navigate to={'/'}/>
        : <Navigate to={'/'} />
    )
}