import { useState } from "react";
import { IoMdHeartEmpty, IoMdStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { addCartItems, updateQuantity } from "../utils/cartSlice";
import { FcOk } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { updateWishList } from "../utils/wishListSlice";

const ProductInfo = ({ productDetail }) => {
  const [success, setSuccess] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const isLogin = useSelector((store) => store.user.loggedInUser?.email);

  const dispatch = useDispatch();

  const addedItems = useSelector((store) => store.cart.addedItems);

  const wishListItems = useSelector((store) => store.wishlist.wishListItems);

  const { title, description, rating, brand, price, discountPercentage, id } =
    productDetail;

  const handleWishList = () => {
    isLogin && dispatch(updateWishList({ [id]: { productDetail } }));
  };

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleReduceQuantity = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  const handleCartItems = () => {
    addedItems[id]
      ? dispatch(updateQuantity({ id, quantity }))
      : dispatch(
          addCartItems({
            [id]: {
              productDetail,
              quantity,
              totalPrice: quantity * price,
            },
          })
        );
    setQuantity(1);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };
  return (
    <div className="md:w-2/5 space-y-5 dark:text-gray-400">
      <h3 className="text-gray-500 font-semibold tracking-wider">{brand}</h3>
      <h1 className="font-semibold dark:text-gray-300 tracking-wider text-4xl">
        {title}
      </h1>

      <p className="tracking-wide ">{description}</p>
      <h5 className="flex items-center p-1 px-3 font-semibold text-sm shadow-lg w-fit rounded-lg">
        <IoMdStar size={20} className="text-green-700 dark:text-green-400" />
        {rating}
      </h5>
      <div className="flex justify-between items-center px-2">
        <div>
          ${price}{" "}
          <span className="text-gray-500 line-through">
            ${(price / (1 - discountPercentage / 100)).toFixed(2)}
          </span>
        </div>
        <div className="rounded-2xl text-sm border px-2 py-1">
          {discountPercentage}% off
        </div>
      </div>
      <button
        onClick={handleWishList}
        disabled={success || !isLogin}
        className="disabled:opacity-80 flex justify-center mx-auto border py-1 px-4 rounded-lg items-center gap-3"
      >
        Wishlist
        <span
          className={
            "rounded-full  p-2 border border-gray-300 relative flex justify-center items-center"
          }
        >
          <IoMdHeartEmpty />
          <FaHeart
            className={`duration-500 text-red-600 absolute ${
              wishListItems[id] ? " h-full" : "h-0"
            }`}
          />
        </span>
      </button>
      <div className="flex flex-col lg:flex-row max-w-[90%] lg:justify-between max-lg:items-center max-lg:gap-2 mx-auto">
        <div className="flex border gap-5 w-fit py-1 px-3">
          <span>Quantity</span>{" "}
          <div className="flex gap-5">
            <button onClick={handleReduceQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={handleAddQuantity}>+</button>
          </div>
        </div>
        <button
          onClick={handleCartItems}
          disabled={success || !isLogin}
          className={
            "bg-[#1D232A] dark:shadow-sm duration-200  disabled:opacity-50 px-5 py-1 text-white dark:text-cyan-500 rounded-xl " +
            (success
              ? "translate-y-1 dark:shadow-none"
              : "dark:shadow-teal-400")
          }
        >
          + Add to cart
        </button>
      </div>
      {!isLogin && (
        <div className="text-red-500 text-center font-semibold tracking-wider">
          Please Login before adding Items
        </div>
      )}
      <p
        className={
          (success ? "opacity-100" : "opacity-0 translate-y-5") +
          " duration-500 text-green-600 flex gap-1 items-center justify-center font-semibold"
        }
      >
        Your items added to the cart <FcOk />
      </p>
    </div>
  );
};

export default ProductInfo;
