import { useState } from "react";
import { useSelector } from "react-redux";

const CustomerInfo = () => {
  const { email, displayName } = useSelector(
    (store) => store.user.loggedInUser
  );
  const [customerData, setCustomerData] = useState({
    email,
    displayName,
    userPhone: "",
  });

  const handleChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  return (
    <>
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
    </>
  );
};
export default CustomerInfo;
