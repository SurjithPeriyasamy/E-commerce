import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/sideBarSlice";
import { closePopUp } from "../utils/userSlice";
const About = () => {
  const [me, setMe] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
    dispatch(closeSideBar());
    dispatch(closePopUp());
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/surjithperiyasamy");
    const json = await data.json();
    setMe(json);
  };
  return (
    <div className="mt-20 max-w-6xl mx-auto">
      <img src={me?.avatar_url} alt="me" className="mx-auto" />
    </div>
  );
};

export default About;
