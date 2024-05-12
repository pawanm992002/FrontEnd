import { createContext, useContext, useEffect, useState } from "react";

export const context = createContext({
  userData: null,
  token: "",
  typeOfUser: "", // admin, faculty, hod
  isLoggedIn: false
});

export function AuthContext({ children }) {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData") || null));
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [typeOfUser, setTypeOfUser] = useState(localStorage.getItem("typeOfUser") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn") || false))
  
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData") || null));
    setTypeOfUser(localStorage.getItem("typeOfUser") || "");
    setToken(localStorage.getItem("token") || "");
    setIsLoggedIn(JSON.parse(localStorage.getItem("isLoggedIn") || false))
  }, []);

  const handleLogout = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('typeOfUser');
    localStorage.removeItem('userData');
  }
  
  return (
    <context.Provider value={{ userData, token, typeOfUser, isLoggedIn,handleLogout}}>
      {children}
    </context.Provider>
  );
}

export default function MyContext() {
  return useContext(context)
} 