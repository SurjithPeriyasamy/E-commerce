import React from "react";

const StepsButton = ({ handleNext, current, steps }) => {
  return (
    <div className="w-1/2 text-center mx-auto mt-5">
      <button
        className="text-lg w-32 dark:text-cyan-500 dark:bg-transparent bg-slate-700 text-white dark:border-fuchsia-600 dark:border-2 font-semibold capitalize tracking-wider shadow-md px-5 hover:translate-y-2 hover:shadow-fuchsia-500 hover:shadow-sm shadow-teal-500 duration-200 py-[5px] rounded-lg"
        onClick={handleNext}
      >
        {current === steps.length ? "finish" : "Next"}
      </button>
    </div>
  );
};

export default StepsButton;
