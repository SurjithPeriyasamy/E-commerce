import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { MdNightsStay } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../utils/themeSlice";

const ThemeContainer = () => {
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <div className="cursor-pointer" onClick={handleTheme}>
      <div className="flex justify-between items-center gap-3 pr-2 pl-[7px] py-1 relative rounded-full -z-50 duration-300 transition-all dark:bg-slate-800 bg-cyan-700">
        <span className="absolute h-[26px] w-[28px] dark:left-[38px] left-[5px] rounded-full bg-white -z-10  duration-500 "></span>
        <WiDaySunny size={23} className="dark:text-gray-500 text-sky-700" />
        <MdNightsStay size={21} className="text-black" />
      </div>
    </div>
  );
};

export default ThemeContainer;
