import { useUserContext } from "../../contexts/UserContext";
import {Navigate , Outlet} from 'react-router'


export default function AuthGuard(){
    const {email} = useUserContext()

    if(!email){
        return <Navigate to={'/fitzone/login'}/>
    }

    return <Outlet />
}