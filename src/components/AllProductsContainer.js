import { Link } from "react-router-dom";
import { sortedProducts } from "../utils/helper";
import ProductCard from "./ProductCard";
import useAllProducts from "../hooks/useAllProducts";
import { useSelector } from "react-redux";
import ShimmerUi from "./ShimmerUi";
import { useMemo, useState } from "react";

const AllProductsContainer = ({ category, filter, setFilter }) => {
  const [loading, setLoading] = useState(false);

  useAllProducts(category, setFilter, setLoading);
  const products = useSelector((store) => store.products.category);
  // const productsList = useMemo(
  //   () => sortedProducts(filter, products[category]),
  //   [products[category], filter]
  // );

  const productsList = sortedProducts(filter, products[category]);

  if (!productsList) return <ShimmerUi />;

  return (
    <div className="flex justify-evenly flex-wrap lg:gap-12 gap-y-10">
      {productsList.map((product) => (
        <Link
          to={`/products/${product.id}`}
          key={product.id}
          className="shadow-lg group dark:bg-[#2A323C] hover:bg-blue-200 font-semibold rounded-xl h-80 w-60"
        >
          <ProductCard product={product} />
        </Link>
      ))}
      {loading && <ShimmerUi />}
    </div>
  );
};

export default AllProductsContainer;
