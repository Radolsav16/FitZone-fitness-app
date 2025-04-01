import { useUserContext } from "../../contexts/UserContext";
import {Navigate , Outlet} from 'react-router'
export default function GuestGuard(){
    const {email} = useUserContext()

    if(email){
        return <Navigate to={'/'}/>
    }

    return <Outlet />
}