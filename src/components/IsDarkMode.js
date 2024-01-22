import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { MdNightsStay } from "react-icons/md";

const IsDarkMode = ({ isdark, setIsDark }) => {
  return (
    <div className="cursor-pointer" onClick={() => setIsDark(!isdark)}>
      <div
        className={`flex justify-between items-center gap-3 pr-2 pl-[7px] py-1 relative rounded-full -z-50 duration-500 transition-all ${
          isdark ? "bg-slate-800" : "bg-cyan-700"
        }`}
      >
        <span
          className={
            "absolute h-[26px] w-[28px]  rounded-full bg-white -z-10 duration-700 " +
            (isdark ? "left-[38px]" : "left-[5px]")
          }
        ></span>
        <WiDaySunny
          size={23}
          className={`${isdark ? "text-gray-500" : "text-sky-700"}`}
        />
        <MdNightsStay size={21} className="text-black" />
      </div>
    </div>
  );
};

export default IsDarkMode;
