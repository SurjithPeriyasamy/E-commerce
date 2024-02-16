import { useDispatch } from "react-redux";
import useCartItems from "../hooks/useCartItems";
import CartItemList from "./CartItemList";
import { clearCart } from "../utils/cartSlice";
import Stepper from "./stepper/Stepper";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const [popUp, setPopUp] = useState(false);
  const dispatch = useDispatch();
  const { totalCartItems, cartItemsArray, totalPrice } = useCartItems();
  const handleCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="mt-32 dark:text-white ">
      {totalCartItems ? (
        <div className="max-w-6xl mx-auto pb-10 space-y-3 ">
          <h1 className="mx-auto w-fit text-xl  font-semibold ">
            Your Cart ({totalCartItems} Items)
          </h1>
          <div className="mx-auto w-fit">
            <button
              onClick={handleCart}
              className="bg-slate-700 hover:bg-black duration-200 text-white px-5 py-2 rounded-md"
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
          <div className=" md:w-[50%] md:ml-10 w-11/12 max-md:mx-auto bg-teal-200 dark:bg-gray-800 rounded-lg shadow-xl duration-1000 transition-transform p-3">
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
              <Link
                to={"/checkout"}
                className={`w-fit  transition-transform shadow-lg text-sm py-2 px-3 bg-gray-800 text-cyan-500 font-semibold rounded-md`}
              >
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </div>
          {/* <div
            className={`duration-500 origin-center  h-screen w-full absolute flex justify-center items-center inset-0 bg-black bg-opacity-50 ${
              popUp ? "opacity-100" : "-z-20 opacity-0"
            }`}
          >
            <div
              className={`size-96 relative duration-300 origin-bottom-left ease-in-out bg-blue-400 ${
                popUp ? "scale-100 rounded-md " : "scale-0 rounded-full "
              }`}
            >
              <span
                onClick={() => setPopUp(false)}
                className="absolute right-0"
              >
                Close
              </span>
            </div>
          </div> */}
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
