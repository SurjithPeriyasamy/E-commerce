import { Link } from "react-router-dom";
import { sortedProducts } from "../utils/helper";
import ProductCard from "./ProductCard";
import useCategory from "../hooks/useCategory";
import { useSelector } from "react-redux";
import ShimmerUi from "./ShimmerUi";

const CategoryContainer = ({ filter, setFilter, category }) => {
  useCategory(setFilter, category);

  const products = useSelector((store) => store.products.category);

  if (!products[category]) return <ShimmerUi />;
  const productsList = sortedProducts(filter, products[category]);
  return (
    <div className="flex justify-evenly flex-wrap  lg:gap-12 gap-y-10">
      {productsList.map((product) => (
        <Link
          to={`/products/${product.id}`}
          key={product.id}
          className="shadow-lg group dark:bg-[#2A323C] hover:bg-blue-200 font-semibold rounded-xl h-80 w-60"
        >
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};
export default CategoryContainer;
