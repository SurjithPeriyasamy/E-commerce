import React from "react";
import { Slide } from "react-awesome-reveal";
import landingBg4 from "../images/landingBg4.jpg";
import { BsArrowDownCircleFill } from "react-icons/bs";

const MainContainer = ({ da }) => {
  return (
    <div className="relative mt-20 lg:mt-0">
      <div
        className={da && "bg-black bg-opacity-40 h-full absolute z-20 w-full"}
      ></div>
      <img src={landingBg4} alt="land" />

      <div className="select-none space-y-5 absolute z-20 xl:top-1/4 md:top-[20%] sm:top-[20%] top-[15%] sm:left-[60%] sm:text-2xl left-[55%]  md:block font-medium md:text-3xl xl:text-5xl font-Pacifico dark:text-gray-400  text-red-300 tracking-widest ">
        <Slide direction="up">
          <h1>Elevate Your Style</h1>
          <h4>With Me</h4>
        </Slide>
        <Slide direction="up">
          <button className="mx-auto bg-gray-50 dark:bg-slate-800 dark:text-cyan-400 text-black rounded-full font-Lato font-extrabold text-lg p-2 px-4 sm:flex items-center gap-5 hidden scale-90 lg:scale-100 tracking-wider">
            Let's Shop
            <BsArrowDownCircleFill className="text-2xl animate-bounce" />
          </button>
        </Slide>
      </div>
    </div>
  );
};

export default MainContainer;
