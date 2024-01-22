import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import SideBar from "./components/SideBar";
function App() {
  //darkmode functionalities will put into redux
  const [isdark, setIsDark] = useState(false);
  return (
    <div className={`font-Lato ${isdark && "dark"}`}>
      <Header setIsDark={setIsDark} isdark={isdark} />
      <SideBar darkMode={isdark} />
      <MainContainer da={isdark} />
    </div>
  );
}

export default App;
