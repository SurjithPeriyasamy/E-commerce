import React from "react";

const ShimmerUi = () => {
  return (
    <div className="flex flex-wrap justify-between gap-5">
      {[...Array(20)].map((s, i) => (
        <div
          key={i}
          className="h-[250px] w-[250px] *:rounded-lg *:w-[230px] *:bg-gray-400 *:dark:bg-gray-700 *:animate-pulse-fast flex flex-col p-2 gap-5 justify-center bg-gray-300 dark:bg-gray-800"
        >
          <div className="h-[180px]"></div>
          <div className="h-[20px]"></div>
          <div className="h-[20px]"></div>
          <div className="h-[20px]"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUi;
