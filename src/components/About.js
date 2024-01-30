import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/sideBarSlice";
import { closePopUp } from "../utils/userSlice";
const About = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBar());
    dispatch(closePopUp());
  }, []);
  return <div className="">About</div>;
};

export default About;
