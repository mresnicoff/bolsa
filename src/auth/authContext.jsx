import {createContext, useCallback, useContext, useMemo, useState} from 'react';

const MY_AUTH_APP = 'MY_AUTH_APP';

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
 // const [isAuthenticated, setIsAuthenticated] = useState(() =>
 //   window.localStorage.getItem(MY_AUTH_APP))
 const [isAuthenticated, setIsAuthenticated] = useState(true)
  ;

  const login = useCallback(function () {
    window.localStorage.setItem(MY_AUTH_APP, true);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(function () {
    window.localStorage.removeItem(MY_AUTH_APP);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated
    }),
    [isAuthenticated, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}



export function useAuthContext() {
  return useContext(AuthContext);
}