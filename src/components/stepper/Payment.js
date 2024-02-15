import { useState } from "react";

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const radioButtons = [
    {
      value: "card",
      lableText: "Debit/Credit Card",
    },
    {
      value: "cash",
      lableText: "Cash on delivery",
    },
  ];
  return (
    <div className="w-4/5 mx-auto space-y-5">
      {radioButtons.map((button) => (
        <div key={button.value} className="w-full">
          <div className="flex  gap-2 items-center py-2 px-4 rounded-md border-2 dark:border-cyan-600">
            <input
              className="checked:bg-white"
              type="radio"
              name="pay"
              checked={selectedPayment === button.value}
              onChange={(e) => setSelectedPayment(e.target.value)}
              id={button.value}
              value={button.value}
            />
            <label className="cursor-pointer" htmlFor={button.value}>
              {button.lableText}
            </label>
          </div>
          <div
            className={`grid overflow-hidden duration-300 ${
              selectedPayment === "card" && button.value === "card"
                ? "grid-rows-[2fr] opacity-100 *:px-3 *:py-2 *:rounded-sm *:bg-gray-700 *:outline-none"
                : "grid-rows-[0fr] opacity-0 h-0"
            } mt-2 gap-3 text-black dark:text-white`}
          >
            <input type="text" placeholder="Debit/credit card No" />
            <input type="text" placeholder="cvv" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Payment;
