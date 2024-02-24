import React from "react";
import { Link } from "react-router-dom";
import useCategoryList from "../hooks/useCategoryList";

const CategoryList = () => {
  const categoryList = useCategoryList();
  return categoryList.map((category) => (
    <Link
      key={category}
      to={`/products/category/${category}`}
      className="hover:bg-gray-300 hover:translate-x-3 duration-200 transition-transform dark:hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
    >
      {category}
    </Link>
  ));
};

export default CategoryList;
