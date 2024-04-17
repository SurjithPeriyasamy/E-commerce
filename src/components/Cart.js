import { useDispatch, useSelector } from "react-redux";
import useCartItems from "../hooks/useCartItems";
import CartItemList from "./CartItemList";
import { clearCart } from "../utils/cartSlice";
import EmptyCartImage from "../images/cart.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((store) => store.user.loggedInUser);
  const { totalCartItems, cartItemsArray, totalPrice } = useCartItems();
  const handleCart = () => {
    dispatch(clearCart());
  };
  const handleCheckOut = () =>
    isLogin ? (navigate("/checkout"), setError(false)) : setError(true);
  return (
    <div className="mt-32 dark:text-white ">
      {totalCartItems ? (
        <div className="max-w-6xl mx-auto ">
          <h1 className="mx-auto mb-5 w-fit text-xl  font-semibold ">
            Your Cart ({totalCartItems} Items)
          </h1>
          <div className="mx-auto w-fit mb-9">
            <button
              onClick={handleCart}
              className="bg-slate-700 hover:bg-black duration-200 text-white px-5 py-2 rounded-md"
            >
              Clear Cart
            </button>
          </div>
          <div className="lg:flex max-lg:space-y-4 gap-5 lg:items-center mx-10">
            <div className="grid md:grid-cols-2 lg:w-3/4 md:gap-5 ">
              {cartItemsArray.map((item) => (
                <CartItemList key={item.productDetail.id} item={item} />
              ))}
            </div>
            <div className="lg:w-[40%] sm:w-1/2 w-11/12 h-fit max-md:mx-auto bg-teal-200 dark:bg-gray-800 rounded-lg shadow-xl duration-1000 transition-transform p-3">
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
                  onClick={handleCheckOut}
                  className={`w-fit transition-transform shadow-lg text-sm py-2 px-3 bg-gray-800 text-cyan-500 font-semibold rounded-md ${
                    error && "animate-bounce-once"
                  }`}
                >
                  PROCEED TO CHECKOUT
                </button>
                {error && !isLogin && (
                  <div className="text-red-600 font-bold">
                    Please Login Before Checkout
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" mx-auto w-fit">
          <h2 className="text-center text-2xl font-Pacifico">
            Your Cart is Empty Please Add Items!!!
          </h2>
          <img src={EmptyCartImage} alt="Empty" />
        </div>
      )}
    </div>
  );
};
export default Cart;
