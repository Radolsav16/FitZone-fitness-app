import { UserContext } from "../contexts/UserContext";
import { fetchApi } from "../utils/requester";
import { useContext, useEffect , useState } from "react";


const baseUrl = 'http://localhost:3030/auth';

const urlPaths = {
    register:baseUrl + '/register',
    login:baseUrl + '/login',
    logout:baseUrl + '/logout'

}


export const useRegister = () => {

      const [preview,SetPreview] = useState();
      const [file,SetFile] = useState();

    
      const fileChangeHandler = (e) => {
        SetFile(e.target.files[0]);
      };
    
      useEffect(() => {
        if (!file) {
          return;
        }
        SetPreview(URL.createObjectURL(file));
      }, [file]);
    


     const onRegister =  async (data) => {
       return  fetchApi.post(urlPaths.register,data,{'Content-Type':'multipart/form-data'})

    }

    return { onRegister , fileChangeHandler,file,preview}
}


export const useLogout = () =>{
  const {accessToken , userLogoutHandler} = useContext(UserContext)

  useEffect(()=>{
    if(!accessToken){
      return
    }
  
      fetchApi.get(urlPaths.logout,{'X-Authorization':accessToken});
      userLogoutHandler()
   
   

  },[accessToken,userLogoutHandler])

  return { isLogOut : !!accessToken }
}

export const useLogin = () =>{

    const onLogin = (data) =>{
      return  fetchApi.post(urlPaths.login,data,{'Content-Type':'multipart/form-data'})
    }
  return { onLogin }
}


