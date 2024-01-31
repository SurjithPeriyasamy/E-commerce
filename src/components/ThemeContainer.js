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
      <div className="flex justify-between items-center gap-2 px-[5px] py-[3px] relative rounded-full z-0 duration-300 transition-all dark:bg-slate-800 bg-cyan-700">
        <span className="absolute h-[20px] w-[22px] dark:left-[30px] left-[4px] rounded-full bg-white -z-10  duration-500 "></span>
        <WiDaySunny
          size={19}
          className="dark:text-gray-500 text-sky-700 pl-[1px]"
        />
        <MdNightsStay size={19} className="text-black" />
      </div>
    </div>
  );
};

export default ThemeContainer;
