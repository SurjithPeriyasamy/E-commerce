import { useSelector } from "react-redux";

const useCartItems = () => {
  const { addedItems } = useSelector((store) => store.cart);

  const keys = Object.keys(addedItems);
  const cartItemsArray = keys.map((k) => addedItems[k]);

  const totalCartItems = keys.reduce(
    (acc, curr) => addedItems[curr].quantity + acc,
    0
  );

  const totalPrice = keys.reduce(
    (acc, curr) => addedItems[curr].totalPrice + acc,
    0
  );

  return { cartItemsArray, totalCartItems, totalPrice };
};
export default useCartItems;
