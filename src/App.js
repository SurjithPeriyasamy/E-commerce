import React from "react";
import "./index.css";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import { closeSideBar } from "./utils/sideBarSlice";
import { closePopUp } from "./utils/userSlice";

function App() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);

  const handleMenuAndPopUp = () => {
    dispatch(closeSideBar());
    dispatch(closePopUp());
  };
  return (
    <div className={`font-Lato ${isDarkMode && "dark"}`}>
      <Header />
      <SideBar />
      <div onClick={handleMenuAndPopUp}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
