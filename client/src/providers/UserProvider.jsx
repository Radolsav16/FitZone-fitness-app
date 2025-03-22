import { UserContext } from "../contexts/UserContext";
import { usePersistedState } from "../hooks/usePersistedState";


export function UserProvider({
    children
}){
      const [state,setPersistedState] = usePersistedState({});
    
      const userLoginHandler = (data) => {
        
        setPersistedState(data);
    };
    
    const userLogoutHandler = () => {
      setPersistedState({});
    }
    return(
          <UserContext.Provider value={{...state,userLoginHandler,userLogoutHandler}}>
            {children}
          </UserContext.Provider>
    )
}