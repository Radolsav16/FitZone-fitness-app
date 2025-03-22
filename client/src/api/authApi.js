import { fetchApi } from "../utils/requester";
import { useEffect , useState } from "react";


const baseUrl = 'http://localhost:3030/auth';

const urlPaths = {
    register:baseUrl + '/register',
    login:baseUrl + '/login',
    logout:baseUrl + '/logout'

}


export const useRegister = () => {

      const [preview,SetPreview] = useState();
      const [file,SetFile] = useState();
      const [errors,SetErrors] = useState({});
      const [dataState,SetDataState] = useState({
        name:"",
        email:"",
        password:"",
        repeatPassword:""
      });

      const handleDataOnChange = (event) => {
        SetErrors({})
    SetDataState({
      ...dataState,
      [event.target.name]: event.target.value,
    });
  };
  
     

    
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

    return { onRegister , fileChangeHandler,file,preview,errors,SetErrors,dataState,handleDataOnChange}
}


