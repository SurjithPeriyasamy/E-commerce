import React, { useEffect, useRef, useState } from "react";
import CustomerInfo from "./CustomerInfo";
import ShippingInfo from "./ShippingInfo";
import Payment from "./Payment";
import Confirmation from "./Confirmation";
import { useNavigate } from "react-router-dom";

const Stepper = () => {
  const [current, setCurrent] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const stepRef = useRef([]);
  const [margins, setMargins] = useState({
    leftMargin: 0,
    rightMargin: 0,
  });
  const navigate = useNavigate();
  const CHECKOUT_STEPS = [
    {
      name: "Customer Info",
      component: CustomerInfo,
    },
    {
      name: "Shipping Info",
      component: ShippingInfo,
    },
    {
      name: "Payment",
      component: Payment,
    },
    {
      name: "Confirmation",
      component: Confirmation,
    },
  ];
  useEffect(() => {
    setMargins({
      leftMargin: stepRef.current[0].offsetWidth / 2,
      rightMargin: stepRef.current[CHECKOUT_STEPS.length - 1].offsetWidth / 2,
    });
  }, []);

  const calculateBarWidth = () =>
    ((current - 1) / (CHECKOUT_STEPS.length - 1)) * 100;

  const handleNext = () => {
    setCurrent((prev) =>
      prev === CHECKOUT_STEPS.length
        ? (setIsComplete(true), navigate("/"), prev)
        : prev + 1
    );
  };

  const ActiveComponent = CHECKOUT_STEPS[current - 1].component;
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-5 mt-32 px-5 justify-center items-center dark:text-white">
      <div className="max-md:w-full ml-5 mr-5 w-4/5 items-center flex justify-between relative">
        {CHECKOUT_STEPS.map((step, index) => (
          <div
            key={step.name}
            ref={(el) => (stepRef.current[index] = el)}
            className="flex flex-col items-center z-10"
          >
            <div
              className={` ${
                current > index + 1 || isComplete
                  ? "bg-green-600 dark:bg-green-700  text-white"
                  : ""
              } ${
                current === index + 1 && !isComplete
                  ? "bg-blue-600 dark:bg-blue-700 text-white"
                  : "bg-gray-400"
              } rounded-full text-lg  dark:bg-[#2A323C] flex items-center justify-center mb-1 size-10 max-[430px]:size-8`}
            >
              {current > index + 1 || isComplete ? (
                <span>&#10003;</span>
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <div className="text-lg max-[430px]:text-sm dark:text-gray-400">
              {step.name}
            </div>
          </div>
        ))}
        <div
          style={{
            width: `calc(100% - ${margins.leftMargin + margins.rightMargin}px)`,
            marginLeft: margins.leftMargin,
            marginRight: margins.rightMargin,
          }}
          className="h-1 absolute bg-gray-400 dark:bg-gray-700 top-1/4"
        >
          <div
            style={{ width: `${calculateBarWidth()}%` }}
            className={`h-full bg-green-500 duration-300 ease-linear `}
          ></div>
        </div>
      </div>
      <div className="md:w-1/2 w-11/12 px-3 py-5 rounded-md shadow-xl ">
        <ActiveComponent
          stepsLength={CHECKOUT_STEPS.length}
          handleClick={handleNext}
          current={current}
        />
      </div>
      {/* {!isComplete && (
        <button
          className="text-lg dark:text-cyan-500 dark:bg-transparent bg-slate-700 text-white dark:border-fuchsia-600 dark:border-2 font-semibold capitalize tracking-wider shadow-md px-5 w-32 hover:translate-y-2 hover:shadow-fuchsia-500 hover:shadow-sm shadow-teal-500 duration-200 py-2 rounded-lg"
          onClick={handleNext}
        >
          {current === CHECKOUT_STEPS.length ? "finish" : "Next"}
        </button>
      )} */}
    </div>
  );
};

export default Stepper;
