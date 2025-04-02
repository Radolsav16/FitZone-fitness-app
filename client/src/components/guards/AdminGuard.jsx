import { useUserContext } from "../../contexts/UserContext";
import  {Navigate , Outlet} from 'react-router'

export default function AdminGuard(){
    const {email} = useUserContext();

    if(email !== 'todorovradoslav6@gmail.com' ){
        return <Navigate to={'/'}/>
    }

    return <Outlet />
}