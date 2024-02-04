import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import ProductCard from "./ProductCard";
import { FaChevronRight } from "react-icons/fa6";
import { MdStarRate } from "react-icons/md";
import useCategory from "../hooks/useCategory";

const ProductsContainer = () => {
  const [filter, setFilter] = useState("noFliter");
  const products = useSelector((store) => store.products.category);
  const { name } = useParams();
  const productCategory = name ?? "allProducts";
  useCategory(name, productCategory, products);
  // const ans = products[productCategory].sort((a, b) => {
  //   return a.price - b.price;
  // });
  console.log(products[productCategory]);
  const sortedArray = () => {
    switch (filter) {
      case "topRated":
        return products[productCategory].filter(
          (product) => product.rating > 4.5
        );
      case "lowToHigh":
        return [...products[productCategory]].sort((a, b) => a.price - b.price);
      case "highToLow":
        return [...products[productCategory]].sort((a, b) => b.price - a.price);
      default:
        return products[productCategory];
    }
  };
  if (!sortedArray()) return <ShimmerUi />;
  return (
    <div className="w-[90%] mx-auto space-y-5 pb-12">
      <div className="flex items-center gap-1 ml-4 text-gray-500">
        <span>Products </span>
        <FaChevronRight size={12} className="mt-1" />{" "}
        <span className="first-letter:capitalize">{productCategory}</span>
      </div>
      <div className="dark:text-[#A6ADBA]">
        <div className="flex gap-10 mx-auto mb-10 px-5 py-2 dark:*:bg-gray-700 bg-white dark:text-gray-200 dark:bg-cyan-600 shadow-lg rounded-b-lg w-fit items-center sticky top-16 z-20">
          <button
            onClick={() => setFilter("topRated")}
            className="flex gap-1 items-center bg-slate-300  rounded-lg px-3 py-1"
          >
            Top Rated <MdStarRate size={20} className="text-green-700" />
          </button>
          <select
            className="outline-none bg-blue-300  rounded-lg px-3 py-1 cursor-pointer"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="noFilter">Sort by Price</option>
            <option value="lowToHigh">Low to high</option>
            <option value="highToLow">High to low</option>
          </select>
        </div>
        <div className="flex justify-evenly flex-wrap  lg:gap-12 gap-y-10">
          {sortedArray().map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="shadow-lg group dark:bg-[#2A323C] hover:bg-blue-200 font-semibold rounded-xl h-80 w-60"
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductsContainer;
