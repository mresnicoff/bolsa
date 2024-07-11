import {createContext, useCallback, useContext, useMemo, useState} from 'react';
import axios from 'axios';
const MY_AUTH_APP = 'MY_AUTH_APP';

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
 // const [isAuthenticated, setIsAuthenticated] = useState(() =>
 //   window.localStorage.getItem(MY_AUTH_APP))
 const [user, setUser] = useState({name:"Visitor",isAuthenticated:false})
  ;

  const login = useCallback(function (email,password) {
    window.localStorage.removeItem(MY_AUTH_APP);

       axios.get(`http://localhost:3001/usuarios/?email=${email}&password=${password}`).then(response=>{
        console.log(response)
    setUser((prevState) => ({
      ...prevState,
      name: response.data.nombre,isAuthenticated:true
    }))})
  }, []);

  const logout = useCallback(function (email) {
    window.localStorage.removeItem(MY_AUTH_APP);
    setUser((prevState) => ({
      ...prevState,
      name: "Visitor",isAuthenticated:false
    }))
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      user
    }),
    [user, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}



export function useAuthContext() {
  return useContext(AuthContext);
}