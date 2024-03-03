import { useState } from "react";
import StepsButton from "./StepsButton";
import { useDispatch } from "react-redux";
import { addShippingInfo } from "../../utils/customerSlice";
import Error from "./Error";

const ShippingInfo = ({ handleClick, stepsLength, current }) => {
  const [error, setError] = useState(false);
  const [shippingAddress, setShippingAddress] = useState({
    doorNo: "",
    street: "",
    cityAndState: "",
    pincode: "",
    country: "",
  });
  const dispatch = useDispatch();
  const inputs = [
    { name: "doorNo", placeholder: "Door No" },
    { name: "street", placeholder: "Street or locality" },
    { name: "cityAndState", placeholder: "City and State" },
    { name: "pincode", placeholder: "Pincode" },
    { name: "country", placeholder: "Country" },
  ];
  const handleNext = () => {
    const ans = Object.values(shippingAddress).every((value) => value);
    if (!ans) {
      setError(true);
      return;
    }
    handleClick();
    dispatch(addShippingInfo(shippingAddress));
  };
  return (
    <>
      <div className="flex flex-col gap-5 *:mx-auto *:outline-none *:rounded-md *:dark:bg-gray-700 *:bg-gray-200 * *:py-2 *:px-4 *:w-4/5">
        {inputs.map((inp, i) => (
          <input
            key={inp.name}
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                [inp.name]: e.target.value,
              })
            }
            value={shippingAddress[inp.name]}
            type="text"
            name={inp.name}
            placeholder={inp.placeholder}
          />
        ))}
      </div>
      {error && <Error />}
      <StepsButton
        handleNext={handleNext}
        stepsLength={stepsLength}
        current={current}
      />
    </>
  );
};
export default ShippingInfo;
