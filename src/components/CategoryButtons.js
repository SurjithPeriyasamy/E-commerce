import React from "react";
import { Link, useParams } from "react-router-dom";

const CategoryButtons = () => {
  const categories = ["mens-shirts", "womens-dresses", "laptops", "sunglasses"];
  const { name } = useParams();
  return (
    <div id="products" className="w-fit mx-auto">
      <div className="flex md:gap-10 gap-2 justify-center flex-wrap">
        <Link
          to={"/"}
          className={`${
            !name
              ? "bg-teal-700 text-white dark:bg-cyan-500 dark:text-black"
              : "border"
          } shadow-lg shrink-0 duration-500 rounded-3xl py-1 px-4 dark:border-none dark:text-[#A6ADBA]`}
        >
          All
        </Link>
        {categories.map((c, i) => (
          <Link
            key={i}
            to={"/category/" + c}
            className={`${
              name === c
                ? "bg-teal-700 text-white dark:bg-cyan-500 dark:text-black"
                : "border"
            } rounded-3xl shrink-0 py-1 px-4 dark:border-none dark:text-[#A6ADBA] duration-500 shadow-lg`}
          >
            {c}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryButtons;
