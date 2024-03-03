import { useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import StepsButton from "./StepsButton";
import Error from "./Error";

const Payment = ({ handleClick, stepsLength, current }) => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [cardData, setCardData] = useState({
    cardNumber: "",
    date: "",
    cvv: "",
  });
  const [error, setError] = useState(false);
  const radioButtons = [
    {
      value: "card",
      lableText: "Debit/Credit Card",
      icon: FaCreditCard,
    },
    {
      value: "cash",
      lableText: "Cash on delivery",
      icon: BsCashCoin,
    },
  ];
  const handleChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };
  const handleNext = () => {
    const val = Object.values(cardData).every((data) => data);

    if (selectedPayment === "cash" || (selectedPayment === "card" && val)) {
      handleClick();
    } else {
      setError(true);
    }
  };
  return (
    <div className="w-4/5 mx-auto space-y-5">
      {radioButtons.map((button) => (
        <div key={button.value} className="w-full">
          <div className="flex justify-center gap-2 items-center py-2 px-4 rounded-md border-2 dark:border-cyan-600">
            <input
              type="radio"
              name="pay"
              checked={selectedPayment === button.value}
              onChange={(e) => {
                setSelectedPayment(e.target.value);
                button.value === "cash" && setError(false);
              }}
              id={button.value}
              value={button.value}
            />
            <label className="cursor-pointer" htmlFor={button.value}>
              {button.lableText}
            </label>
            <button.icon />
          </div>
          <div
            className={`grid overflow-hidden duration-300 ${
              selectedPayment === "card" && button.value === "card"
                ? "grid-rows-[2fr] opacity-100 "
                : "grid-rows-[0fr] opacity-0 h-0"
            } mt-2 gap-3 text-black dark:text-white`}
          >
            <input
              onChange={handleChange}
              name="cardNumber"
              className="dark:placeholder:text-slate-300 px-3 py-2 rounded-sm bg-gray-700 outline-none"
              type="text"
              placeholder="Debit/credit card No"
            />
            <div className="flex justify-between items-center *:px-3 *:py-2 *:rounded-sm *:bg-gray-700 *:outline-none">
              <input
                name="date"
                onChange={handleChange}
                className="dark:placeholder:text-slate-300"
                type="date"
                placeholder="Expiry date"
              />
              <input
                name="cvv"
                onChange={handleChange}
                className="dark:placeholder:text-slate-300"
                type="text"
                placeholder="cvv"
              />
            </div>
          </div>
          {button.value === "card" && error && <Error />}
        </div>
      ))}
      <StepsButton
        handleNext={handleNext}
        stepsLength={stepsLength}
        current={current}
      />
    </div>
  );
};
export default Payment;
