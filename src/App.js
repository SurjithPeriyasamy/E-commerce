import React from "react";
import "./index.css";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import { closeSideBar } from "./utils/sideBarSlice";

function App() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  return (
    <div className={`font-Lato ${isDarkMode && "dark"}`}>
      <Header />
      <SideBar />
      <div onClick={() => dispatch(closeSideBar())}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
