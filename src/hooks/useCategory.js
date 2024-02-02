import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../utils/productSlice";

const useCategory = (name, productCategory, products) => {
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
  }, [name]);
};
export default useCategory;
