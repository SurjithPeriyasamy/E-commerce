import React from "react";
import { FaHeart } from "react-icons/fa6";
import { IoMdHeartEmpty, IoMdStar } from "react-icons/io";

const ProductCard = ({ product }) => {
  const { thumbnail, price, title, rating } = product;
  return (
    <div className="p-2 flex flex-col justify-between size-full">
      <img
        src={thumbnail}
        alt="product"
        className="h-44 w-full object-cover rounded-xl group-hover:-translate-y-9 duration-300  border-gray-800 "
      />
      <h2 className="dark:text-white">{title}</h2>
      <div className="font-normal text-sm flex justify-between items-center">
        <span>${price}</span>{" "}
        <span className="flex text-green-600 font-bold">
          <IoMdStar size={17} />
          {rating}
        </span>
      </div>
      <div className="flex justify-around items-center">
        <button className="relative z-0 bg-gray-300 dark:bg-gray-800 py-2 rounded-full px-5 text-sm w-3/4 ">
          <span className="group-hover:text-white duration-100">
            + Add to Cart
          </span>
          <span className="absolute -z-10 dark:bg-sky-500 bg-gray-900 h-full group-hover:w-full w-0 duration-300 top-0 right-0 rounded-full"></span>
        </button>
        <button className="rounded-full dark:group-hover:bg-white relative flex justify-center items-center  p-2 border border-gray-300 dark:border-gray-700">
          <IoMdHeartEmpty />
          <FaHeart className="absolute text-red-600 duration-300 h-0 origin-bottom group-hover:h-full" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
