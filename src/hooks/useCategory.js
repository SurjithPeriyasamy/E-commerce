import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../utils/productSlice";
import { useParams } from "react-router-dom";

const useCategory = (filter, setFilter) => {
  const { name } = useParams();
  const productCategory = name ?? "allProducts";

  const products = useSelector((store) => store.products.category);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const data = await fetch(
      `https://dummyjson.com/products/${name ? "category/" + name : ""}`
    );
    const json = await data.json();

    dispatch(addProducts({ [productCategory]: json.products }));
  };
  useEffect(() => {
    !products[productCategory] && fetchData();
    setFilter("noFilter");
  }, [name]);

  const sortedProducts = () => {
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

  return [products[productCategory] && sortedProducts(), productCategory];
};
export default useCategory;
