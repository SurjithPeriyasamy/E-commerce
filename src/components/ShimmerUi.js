import React from "react";

const ShimmerUi = () => {
  return (
    <div className="flex justify-evenly flex-wrap  lg:gap-12 gap-y-10">
      {[...Array(20)].map((s, i) => (
        <div
          key={i}
          className="h-[300px] w-[250px] *:rounded-lg rounded-lg * *:dark:bg-gray-700 *:animate-pulse-fast flex flex-col p-2 gap-5 justify-center bg-gray-300 dark:bg-gray-800"
        >
          <div className="h-[180px] w-[230px]  bg-gray-400"></div>
          <div className="h-[20px] w-1/2 bg-gray-400"></div>
          <div className="*:h-[20px] w-[230px] *:w-2/5 *:rounded-2xl flex justify-between items-center *:bg-gray-400">
            <div className=""></div>
            <div className=""></div>
          </div>
          <div className="flex justify-around items-center  *:bg-gray-400">
            <div className="h-[35px] w-3/4 rounded-3xl"></div>
            <div className="size-9 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUi;
