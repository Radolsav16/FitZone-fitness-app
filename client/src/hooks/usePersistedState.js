import { useState } from "react"


export const usePersistedState = (initialState) => {
    const [state,SetState] = useState( ()=> {
        const persistedStateJson = localStorage.getItem('auth');

        if(!persistedStateJson){
            return initialState;
        }


        const persistedState = JSON.parse(persistedStateJson);

        return persistedState;

    })


    const setPersistedState = (data) =>{
       
        const dataJson = JSON.stringify(data);
        
        localStorage.setItem('auth',dataJson);

        SetState(data);
    }


    return [state,setPersistedState];
}