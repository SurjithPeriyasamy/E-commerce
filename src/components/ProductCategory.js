import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/sideBarSlice";
import ProductsContainer from "./ProductsContainer";

const ProductsCategory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return (
    <div className="pt-10 pb-5 max-w-6xl mx-auto">
      <h1 className="text-3xl text-center first-letter:text-5xl font-bold dark:text-gray-600">
        Our Best Category
      </h1>
      <ProductsContainer />
    </div>
  );
};

export default ProductsCategory;
