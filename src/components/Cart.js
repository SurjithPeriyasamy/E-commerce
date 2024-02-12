import { useDispatch } from "react-redux";
import useCartItems from "../hooks/useCartItems";
import CartItemList from "./CartItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { totalCartItems, cartItemsArray, totalPrice } = useCartItems();
  const handleCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="mt-32 dark:text-white">
      {totalCartItems ? (
        <div className="max-w-6xl mx-auto space-y-3">
          <h1 className="mx-auto w-fit text-xl  font-semibold ">
            Your Cart ({totalCartItems} Items)
          </h1>
          <div className="mx-auto w-fit">
            <button
              onClick={handleCart}
              className="bg-slate-700 text-white px-5 py-2 rounded-md"
            >
              Clear Cart
            </button>
          </div>
          <div className="space-y-6">
            <div className=" grid grid-cols-5 border-b-2 justify-items-center place-items-center py-2">
              <h1>Item</h1>
              <h1>Price</h1>
              <h1>Quantity</h1>
              <h1>Total</h1>
              <h1>Remove</h1>
            </div>
            {cartItemsArray.map((item) => (
              <CartItemList key={item.productDetail.id} item={item} />
            ))}
          </div>
          <div className="md:w-[50%] group shadow-xl duration-300 p-3">
            <h3 className="text-xl my-5 font-semibold tracking-wider ">
              Cart Totals
            </h3>
            <div className="dark:text-gray-400 *:flex *:justify-between space-y-5">
              <div>
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div>
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="dark:text-white font-semibold">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>
              <button
                className={` shadow-lg text-sm py-2 px-3 bg-gray-800 text-cyan-500 font-semibold rounded-md`}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-xl mx-auto w-fit">
          Your Cart is Empty Please Add Items
        </div>
      )}
    </div>
  );
};
export default Cart;
