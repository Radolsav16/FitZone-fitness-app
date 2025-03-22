import { createContext } from "react";

export const UserContext = createContext({
    email:"",
    name:"",
    imageUrl:"",
    accessToken:"",
    userLoginHandler:()=>null,
    userLogoutHandler:()=>null
})