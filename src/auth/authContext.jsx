import {createContext, useCallback, useContext, useMemo, useState} from 'react';

const MY_AUTH_APP = 'MY_AUTH_APP';

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
 // const [isAuthenticated, setIsAuthenticated] = useState(() =>
 //   window.localStorage.getItem(MY_AUTH_APP))
 const [user, setUser] = useState({name:"Visitor",isAuthenticated:false, empresa:"Sin"})
 const [filter, setFilter] = useState({ubicacion:"",empresa:"", titulo:""})
 const [sorted, setSorted] = useState("Fecha")
  ;

  const login = useCallback(function (aName, empresa) {
    console.log("context",empresa)
    window.localStorage.setItem(user, MY_AUTH_APP);
    setUser((prevState) => ({
      ...prevState,
      name: aName,isAuthenticated:true, empresa:empresa
    }))
  }, []);

  

  const logout = useCallback(function (email) {
    window.localStorage.removeItem(MY_AUTH_APP);
    setUser((prevState) => ({
      ...prevState,
      name: "Visitor",isAuthenticated:false
    }))
  }, []);

  const  appliedFilter= useCallback(function (miFiltro) {
    window.localStorage.removeItem(MY_AUTH_APP);
    setFilter(miFiltro)
    console.log(miFiltro)
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