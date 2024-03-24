import { createContext, useContext } from "react";



export const UserContext = createContext({
    themeMode : 'light',
    lightMode : () =>{},
    darkMode : () =>{},
    color: '#44bbff',
});

export const ContextProvider = UserContext.Provider;

export default function useUserContext(){
    return useContext(UserContext);
}