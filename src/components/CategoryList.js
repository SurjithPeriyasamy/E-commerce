import React from "react";
import { Link } from "react-router-dom";
import useCategoryList from "../hooks/useCategoryList";

const CategoryList = () => {
  const categoryList = useCategoryList();
  return categoryList.map((category) => (
    <Link
      key={category.slug}
      to={`/products/category/${category.slug}`}
      className="hover:bg-gray-300 hover:translate-x-3 duration-200 transition-transform dark:hover:bg-gray-700 p-1 rounded-lg"
    >
      {category.name}
    </Link>
  ));
};

export default CategoryList;
