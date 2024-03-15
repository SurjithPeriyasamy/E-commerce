import { Suspense, lazy, useState } from "react";
import { useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { MdStarRate } from "react-icons/md";
import AllProductsContainer from "./AllProductsContainer";
import ShimmerUi from "./ShimmerUi";
import CategoryContainer from "./CategoryContainer";

const ProductsContainer = () => {
  const [filter, setFilter] = useState("noFliter");

  const { name } = useParams();
  const productCategory = name ?? "allProducts";

  const toggleTopRate = () => {
    setFilter((prev) => (prev === "topRated" ? "noFilter" : "topRated"));
  };

  return (
    <div className="w-[90%] mx-auto space-y-5 pb-12">
      <div className="flex items-center gap-1 ml-4 text-gray-500">
        <span>Products </span>
        <FaChevronRight size={12} className="mt-1" />{" "}
        <span className="first-letter:capitalize">{productCategory}</span>
      </div>
      <div className="dark:text-[#A6ADBA]">
        <div className="flex dark:text-white gap-20 mx-auto mb-10 bg-gray-800 px-8 py-3 rounded-t-md dark:*:bg-gray-700 shadow-lg rounded-b-lg w-fit items-center sticky top-16 max-lg:top-[110px] z-20">
          <button
            onClick={toggleTopRate}
            className="flex gap-1 items-center bg-slate-300  rounded-lg px-3 py-1"
          >
            {filter === "topRated" ? "Show all Rated" : "Top Rated"}{" "}
            <MdStarRate size={20} className="text-green-700" />
          </button>
          <select
            className="outline-none bg-blue-300  rounded-lg px-3 py-1 cursor-pointer"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="noFilter">Sort by Price</option>
            <option value="lowToHigh">Low to high</option>
            <option value="highToLow">High to low</option>
          </select>
        </div>
        {productCategory === "allProducts" ? (
          <AllProductsContainer
            filter={filter}
            category={productCategory}
            setFilter={setFilter}
          />
        ) : (
          <CategoryContainer
            filter={filter}
            category={productCategory}
            setFilter={setFilter}
          />
        )}
      </div>
    </div>
  );
};
export default ProductsContainer;
