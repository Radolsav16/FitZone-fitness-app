import { createContext, useContext, useState } from "react"


export const loadingContext = createContext()

export function LoadingProvider({
    children
}){
    const [loading, setLoading] = useState(false);

  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);
    
    return(
        
        <loadingContext.Provider value={{loading ,showLoading , hideLoading}}>
            {children}
        </loadingContext.Provider>
     
    )
}


export const useLoadingContext = () => useContext(loadingContext)