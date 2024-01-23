import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/sideBarSlice";
const About = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return <div className="comp-top-space">About</div>;
};

export default About;
