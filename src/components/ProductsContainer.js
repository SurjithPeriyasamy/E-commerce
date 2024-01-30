import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addProducts } from "../utils/productSlice";
import ShimmerUi from "./ShimmerUi";
import ProductCard from "./ProductCard";
import { FaChevronRight } from "react-icons/fa6";
const ProductsContainer = () => {
  const { name } = useParams();

  const dispatch = useDispatch();
  const productCategory = name ? name : "allProducts";
  const products = useSelector((store) => store.products.category);

  useEffect(() => {
    !products[productCategory] && fetchData();
  }, [name]);

  const fetchData = async () => {
    const data = await fetch(
      `https://dummyjson.com/products/${name ? "category/" + name : ""}`
    );
    const json = await data.json();
    dispatch(addProducts({ [productCategory]: json.products }));
  };
  if (!products[productCategory]) return <ShimmerUi />;
  return (
    <div className="w-[90%] mx-auto space-y-12 pb-12">
      <div className="flex items-center gap-1 ml-4 text-gray-500">
        <span>Products </span>
        <FaChevronRight size={12} className="mt-1" />{" "}
        <span className="first-letter:capitalize">{productCategory}</span>
      </div>
      <div className="flex justify-evenly lg:gap-12 gap-y-10 flex-wrap dark:text-[#A6ADBA]">
        {products[productCategory].map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="shadow-lg group dark:bg-[#2A323C] hover:bg-blue-100 font-semibold rounded-xl h-80 w-60"
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ProductsContainer;
