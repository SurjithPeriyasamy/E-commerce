import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { MdNightsStay } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../utils/themeSlice";

const ThemeContainer = () => {
  const dispatch = useDispatch();
  const handleTheme = () => {
    const root = document.body;
    root.classList.contains("dark")
      ? root.classList.remove("dark")
      : root.classList.add("dark");
    dispatch(toggleTheme());
  };
  return (
    <div className="cursor-pointer" onClick={handleTheme}>
      <div className="flex justify-between items-center gap-2 pr-2 pl-[7px] py-1 relative rounded-full z-0 duration-300 transition-all dark:bg-slate-800 bg-cyan-700">
        <span className="absolute h-[23px] w-[25px] dark:left-[31px] left-[5px] rounded-full bg-white -z-10  duration-500 "></span>
        <WiDaySunny size={20} className="dark:text-gray-500 text-sky-700" />
        <MdNightsStay size={20} className="text-black" />
      </div>
    </div>
  );
};

export default ThemeContainer;
