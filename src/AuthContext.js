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
  
  // useEffect(() => {
    // setUserData(JSON.parse(localStorage.getItem("userData") || null));
    // setTypeOfUser(localStorage.getItem("typeOfUser") || "");
    // setToken(localStorage.getItem("token") || "");
    // setIsLoggedIn(JSON.parse(localStorage.getItem("isLoggedIn") || false))
  // }, []);
  
  return (
    <context.Provider value={{ userData, token, typeOfUser, isLoggedIn}}>
      {children}
    </context.Provider>
  );
}

export default function MyContext() {
  return useContext(context)
} 