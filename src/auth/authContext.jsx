import {createContext, useCallback, useContext, useMemo, useState} from 'react';

const MY_AUTH_APP = 'MY_AUTH_APP';

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
 // const [isAuthenticated, setIsAuthenticated] = useState(() =>
 //   window.localStorage.getItem(MY_AUTH_APP))
 const [user, setUser] = useState({name:"Visitor",isAuthenticated:false})
 const [filter, setFilter] = useState({localidad:"all",tima:"all"})
 const [sorted, setSorted] = useState("Fecha")
  ;

  const login = useCallback(function (aName) {
    window.localStorage.setItem(user, MY_AUTH_APP);
    setUser((prevState) => ({
      ...prevState,
      name: aName,isAuthenticated:true
    }))
  }, []);

  

  const logout = useCallback(function (email) {
    window.localStorage.removeItem(MY_AUTH_APP);
    setUser((prevState) => ({
      ...prevState,
      name: "Visitor",isAuthenticated:false
    }))
  }, []);

  const  appliedFilter= useCallback(function (localidad, momento) {
    window.localStorage.removeItem(MY_AUTH_APP);
    setFilter((prevState) => ({
      ...prevState,
      localidad: localidad ,momento:momento
    }))
  }, []);

  const  sorter= useCallback(function (ordenador) {
    window.localStorage.removeItem(MY_AUTH_APP);
    console.log("pasó por el contexto", ordenador)
    setSorted(ordenador)
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      user,
      appliedFilter,
      filter,
      sorted,
      sorter
    }),
    [user, login, logout, appliedFilter, filter, sorter, sorted]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}



export function useAuthContext() {
  return useContext(AuthContext);
}