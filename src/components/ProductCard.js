import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductCard = ({ product }) => {
  const { thumbnail, price, title } = product;
  return (
    <div className="p-2 flex flex-col justify-between w-full h-full">
      <img
        src={thumbnail}
        alt="product"
        className="h-44 w-full rounded-xl group-hover:-translate-y-9 duration-300  border-gray-800 "
      />
      <h2>{title}</h2>
      <h2 className="font-normal">${price}</h2>
      <div className="flex justify-around items-center">
        <button className="relative z-0 bg-gray-300 dark:bg-gray-800 py-2 rounded-full px-5 text-sm w-3/4 ">
          <span className="group-hover:text-white duration-100">
            + Add to Cart
          </span>
          <span className="absolute -z-10 dark:bg-green-700 bg-gray-900 h-full group-hover:w-full w-0 duration-300 top-0 right-0 rounded-full"></span>
        </button>
        <button className="rounded-full  p-2 border border-gray-300 ">
          <IoMdHeartEmpty />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
