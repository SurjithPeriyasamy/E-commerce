import { sortedProducts } from "../utils/helper";
import ProductCard from "./ProductCard";
import useCategory from "../hooks/useCategory";
import ShimmerUi from "./ShimmerUi";

const CategoryContainer = ({ filter, setFilter, category }) => {
  const products = useCategory(setFilter, category);

  if (!products) return <ShimmerUi />;
  const productsList = sortedProducts(filter, products);
  return (
    <div className="flex justify-evenly flex-wrap lg:gap-12 gap-y-10">
      {productsList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default CategoryContainer;
