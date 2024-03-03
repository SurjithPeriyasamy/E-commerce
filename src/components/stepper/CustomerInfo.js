import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerInfo } from "../../utils/customerSlice";
import StepsButton from "./StepsButton";
import Error from "./Error";

const CustomerInfo = ({ current, stepsLength, handleClick }) => {
  const { email, displayName } = useSelector(
    (store) => store.user.loggedInUser
  );
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const [customerData, setCustomerData] = useState({
    displayName,
    email,
    userPhone: "",
  });

  const handleChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };
  const handleNext = () => {
    if (
      !customerData.email ||
      !customerData.displayName ||
      !customerData.userPhone
    ) {
      setError(true);
      return;
    }
    dispatch(addCustomerInfo(customerData));
    handleClick();
  };
  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 *:mx-auto *:outline-none *:rounded-md *:dark:bg-gray-700 *:bg-gray-200 * *:py-2 *:px-4 *:w-4/5">
        <input
          onChange={handleChange}
          name="displayName"
          type="text"
          placeholder="Enter your Name"
          value={customerData.displayName}
        />

        <input
          onChange={handleChange}
          name="userPhone"
          type="tel"
          placeholder="Enter your Number"
          value={customerData.userPhone}
        />
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Enter your Email"
          value={customerData.email}
        />
      </div>
      {error && <Error />}
      <StepsButton
        handleNext={handleNext}
        current={current}
        stepsLength={stepsLength}
      />
    </div>
  );
};
export default CustomerInfo;
