import React, { useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import landingBg4 from "../images/landingBg4.jpg";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/sideBarSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return (
    <div className="relative">
      <div
        className={
          "dark:bg-black dark:bg-opacity-40 top-0 absolute h-full w-full"
        }
      ></div>
      <img src={landingBg4} alt="land" />

      <div className="select-none space-y-5 absolute z-0 xl:top-1/4 md:top-[20%] sm:top-[20%] top-[15%] sm:left-[60%] sm:text-2xl left-[55%]  md:block font-medium md:text-3xl xl:text-5xl font-Pacifico dark:text-gray-400  text-red-300 tracking-widest ">
        <Slide direction="up" className="-skew-y-12">
          <h1>Elevate Your Style</h1>
          <h4>With Me</h4>
        </Slide>
        <Slide direction="up">
          <button className="mx-auto bg-gray-50 dark:bg-transparent hover:scale-90 dark:text-cyan-400 text-black rounded-full font-Lato font-extrabold text-base hover:bg-transparent p-2 px-4 sm:flex items-center gap-5 hidden scale-90 lg:scale-100 tracking-wider dark:shadow-md dark:shadow-fuchsia-600 dark:skew-x-12 dark:hover:shadow-none transition-all">
            Let's Shop
            <BsArrowDownCircleFill className="text-2xl animate-bounce" />
          </button>
        </Slide>
      </div>
    </div>
  );
};

export default MainContainer;
