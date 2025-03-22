import { useState } from "react";



export const useFormState = (stateForm) =>{

     const [errors,SetErrors] = useState({});
          const [dataState,SetDataState] = useState(stateForm);
    
          const handleDataOnChange = (event) => {
            SetErrors({})
        SetDataState({
          ...dataState,
          [event.target.name]: event.target.value,
            });
        }

    return  {handleDataOnChange , dataState , SetDataState , errors,SetErrors }
}