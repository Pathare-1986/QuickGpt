import { createContext, useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dummyUserData,dummyChats } from "../assets/assets";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [chats, setChats] = useState([]);
  const [selectedChats, setSelectedChats] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate();

  const fetchUser = async () => {
    setUser(dummyUserData);
  };

  const fetchUserChats = async () => {
    setChats(dummyChats);
    setSelectedChats(dummyChats[0])
  };

  useEffect(()=>{
    if(theme === "dark"){
        document.documentElement.classList.add("dark")
    }else{
        document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme",theme)
  },[theme])

  useEffect(()=>{
    if(user){
        fetchUserChats()
    }else{
        setChats([])
        setSelectedChats(null)
    }
  },[user])

  useEffect(() => {
    fetchUser();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    chats,
    setChats,
    selectedChats,
    setSelectedChats,
    theme,
    setTheme
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
