import { createContext, useState } from "react"


export const loadingContext = createContext({
    loading:false,
    setLoading:()=>null
})

export function LoadingProvider({
    children
}){
    const [loading,setLoading] = useState(false);
    
    return(
        
        <loadingContext.Provider value={{loading , setLoading}}>
            {children}
        </loadingContext.Provider>
     
    )
}

