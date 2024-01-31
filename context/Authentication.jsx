import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext)


export default function AuthContextProvider({ children }) {

    const [auth, setAuth] = useState({
        isAuthenticated: false,
        userInfo: {}
    })


    return <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
    </AuthContext.Provider>
}