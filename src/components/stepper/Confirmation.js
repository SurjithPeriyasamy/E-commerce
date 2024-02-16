import { useDispatch, useSelector } from "react-redux";
import StepsButton from "./StepsButton";
import { TbTruckDelivery } from "react-icons/tb";
import { clearCart } from "../../utils/cartSlice";

const Confirmation = ({ handleClick, steps, current }) => {
  const dispatch = useDispatch();
  const { customerInfo, shippingInfo } = useSelector((store) => store.customer);
  const { email, userPhone, displayName } = customerInfo;
  const { doorNo, cityAndState, street, country, pincode } = shippingInfo;
  const handleNext = () => {
    dispatch(clearCart());
    handleClick();
  };
  return (
    <div className="*:first-letter:uppercase [&>*:not(:first-child)]:text-gray-500 [&>*:not(:last-child)]:font-semibold [&>*:not(:last-child)]:tracking-wide">
      <h2 className="text-lg flex gap-2 items-center text-gray-300 dark:text-cyan-500">
        Your order will be delivered to the below details
        <TbTruckDelivery className="text-red-500 text-3xl" />
      </h2>
      <h4>{displayName},</h4>
      <h4>{email},</h4>
      <h4>{userPhone},</h4>
      <h5>{doorNo + ", " + street},</h5>
      <h5>{cityAndState + " - " + pincode},</h5>
      <h5>{country}</h5>
      <StepsButton handleNext={handleNext} steps={steps} current={current} />
    </div>
  );
};
export default Confirmation;
