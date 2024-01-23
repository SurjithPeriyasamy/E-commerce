import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/sideBarSlice";

const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return <div className="comp-top-space">Categories</div>;
};

export default Categories;
