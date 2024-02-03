import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    userInfo: {},
  });

  useEffect(() => {
    setAuth((prev) => ({
      ...prev,
      isAuthenticated: localStorage.getItem("isAuthenticated"),
      userInfo: JSON.parse(localStorage.getItem("userInfo")),
    }));
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
