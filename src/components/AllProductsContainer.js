import { Link } from "react-router-dom";
import { sortedProducts } from "../utils/helper";
import ProductCard from "./ProductCard";
import useAllProducts from "../hooks/useAllProducts";
import ShimmerUi from "./ShimmerUi";
import { useMemo, useState } from "react";

const AllProductsContainer = ({ category, filter, setFilter }) => {
  const [loading, setLoading] = useState(false);

  const products = useAllProducts(category, filter, setFilter, setLoading);
  const productsList = useMemo(
    () => sortedProducts(filter, products),
    [filter, products]
  );

  if (!products) return <ShimmerUi />;

  return (
    <div className="flex justify-evenly flex-wrap lg:gap-12 gap-y-10">
      {productsList.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id} className="">
          <ProductCard product={product} />
        </Link>
      ))}
      {loading && <ShimmerUi />}
    </div>
  );
};

export default AllProductsContainer;
