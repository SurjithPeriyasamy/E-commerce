import React, { useEffect, useRef, useState } from "react";
import CustomerInfo from "./CustomerInfo";
import ShippingInfo from "./ShippingInfo";
import Payment from "./Payment";
import Confirmation from "./Confirmation";

const Stepper = () => {
  const [current, setCurrent] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const stepRef = useRef([]);
  const [margins, setMargins] = useState({
    leftMargin: 0,
    rightMargin: 0,
  });
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
  }, [stepRef]);

  const calculateBarWidth = () =>
    ((current - 1) / (CHECKOUT_STEPS.length - 1)) * 100;

  const handleNext = () => {
    setCurrent((prev) =>
      prev === CHECKOUT_STEPS.length ? (setIsComplete(true), prev) : prev + 1
    );
  };

  const ActiveComponent = CHECKOUT_STEPS[current - 1].component;
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-5 py-10 px-5 items-center dark:text-white">
      <div className="bg-blue w-full items-center flex justify-between relative">
        {CHECKOUT_STEPS.map((step, index) => (
          <div
            key={step.name}
            ref={(el) => (stepRef.current[index] = el)}
            className="flex flex-col items-center z-20"
          >
            <div
              className={` ${
                current > index + 1 || isComplete
                  ? "bg-green-600 dark:bg-green-700  text-white"
                  : ""
              } ${
                current === index + 1 && !isComplete
                  ? "bg-blue-500 dark:bg-blue-700 text-white"
                  : ""
              } rounded-full text-lg bg-gray-400 dark:bg-slate-600 flex items-center justify-center mb-1 h-10 w-10`}
            >
              {current > index + 1 || isComplete ? (
                <span>&#10003;</span>
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <div className="text-lg">{step.name}</div>
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
      <div
        className={`flex flex-col gap-5 w-1/2 px-3 py-5 rounded-md shadow-xl ${
          current < 3 &&
          "*:mx-auto *:outline-none *:rounded-md *:dark:bg-gray-700 *:bg-gray-200 * *:py-2 *:px-4 *:w-4/5"
        } `}
      >
        <ActiveComponent />
      </div>
      {!isComplete && (
        <button onClick={handleNext}>
          {current === CHECKOUT_STEPS.length ? "finish" : "Next"}
        </button>
      )}
    </div>
  );
};

export default Stepper;
