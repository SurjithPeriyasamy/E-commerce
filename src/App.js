import React from "react";
import "./index.css";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import { closeSideBar } from "./utils/sideBarSlice";
import { closePopUp } from "./utils/userSlice";
import { closeSearch } from "./utils/searchSlice";
import useGetAllProducts from "../src/hooks/useGetAllProducts";
import { closeWishList } from "./utils/wishListSlice";

function App() {
  const dispatch = useDispatch();
  useGetAllProducts();
  const handleClick = () => {
    dispatch(closeSideBar());
    dispatch(closePopUp());
    dispatch(closeSearch());
    dispatch(closeWishList());
  };
  return (
    <div className={`font-Lato `}>
      <Header />
      <SideBar />
      <div className="comp-top-space" onClick={handleClick}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
