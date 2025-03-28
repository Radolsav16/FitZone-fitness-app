import { createContext, useContext } from "react";

export const UserContext = createContext({
    id:"",
    email:"",
    name:"",
    imageUrl:"",
    accessToken:"",
    userLoginHandler:()=>null,
    userLogoutHandler:()=>null
})

export const useUserContext = () =>{
    const data = useContext(UserContext);

    
    return data;
}