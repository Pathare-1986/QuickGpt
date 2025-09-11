import React, { useState } from "react";
import SideBar from "./components/SideBar";
import ChatBox from "./components/ChatBox";
import Credits from "./pages/Credits";
import Community from "./pages/Community";
import { Route, Routes } from "react-router-dom";
import {AppContextProvider} from "./context/AppContext"
import { assets } from "./assets/assets";

const App = () => {

  const [isMenuOpen ,setIsMenuOpen] = useState(false)

  return (
    <>
    {
      !isMenuOpen && <img src={assets.menu_icon} className="absolute top-3 right-3 w-5 h-5 cursor-pointer md:hidden invert dark:invert-0"  onClick={()=>setIsMenuOpen(true)}/>
    }
      <div className="bg-white dark:bg-gradient-to-b dark:from-[#242124] dark:to-[#000000] dark:text-white">
        <div className="flex h-screen w-screen">
          <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
          <Routes>
            <Route path="/" element={<ChatBox />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
