import React from "react";
import { FaHeart } from "react-icons/fa6";
import { IoMdHeartEmpty, IoMdStar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItems } from "../utils/cartSlice";
import { FcOk } from "react-icons/fc";
import { updateWishList } from "../utils/wishListSlice";

const ProductCard = ({ product }) => {
  const { thumbnail, price, title, rating, id } = product;
  const dispatch = useDispatch();
  const addedProduct = useSelector((store) => store.cart.addedItems);
  const wishListItems = useSelector((store) => store.wishlist.wishListItems);

  const handleCart = (id, productDetail, price) => {
    dispatch(
      addCartItems({
        [id]: { productDetail, quantity: 1, totalPrice: 1 * price },
      })
    );
  };
  const handleWishList = () => {
    dispatch(updateWishList({ [id]: { productDetail: product } }));
  };

  return (
    <div className="shadow-lg dark:bg-[#2A323C] hover:bg-blue-200 font-semibold rounded-xl h-80 w-60">
      <div className="p-2 group flex flex-col justify-between size-full">
        <Link to={`/products/${id}`}>
          <img
            src={thumbnail}
            alt="product"
            className="h-44 w-full object-cover rounded-xl group-hover:-translate-y-9 duration-300  border-gray-800 "
          />
        </Link>
        <h2 className="dark:text-white">{title}</h2>
        <div className="font-normal text-sm flex justify-between items-center">
          <span>${price}</span>{" "}
          <span className="flex text-green-600 font-bold">
            <IoMdStar size={17} />
            {rating}
          </span>
        </div>
        <div className="flex justify-around items-center">
          <button
            onClick={() => handleCart(id, product, price)}
            className="relative z-0 bg-gray-300 dark:bg-gray-800 py-2 rounded-full px-5 text-sm w-3/4 "
          >
            <span className="group-hover:text-white duration-100 flex gap-2 items-center justify-center">
              {!addedProduct[id] ? "+ Add to Cart" : "Added"}
              {addedProduct[id] && <FcOk />}
            </span>
            <span className="absolute -z-10 dark:bg-sky-500 bg-gray-900 h-full group-hover:w-full w-0 duration-300 top-0 right-0 rounded-full"></span>
          </button>
          <button
            onClick={handleWishList}
            className="rounded-full dark:group-hover:bg-white relative flex justify-center items-center  p-2 border border-gray-300 group-hover:border-gray-400 dark:border-gray-700"
          >
            <IoMdHeartEmpty />
            <FaHeart
              className={
                "absolute duration-300origin-bottom  " +
                (wishListItems[id]
                  ? "text-red-600 h-full"
                  : "text-black h-0 group-hover:h-full")
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
