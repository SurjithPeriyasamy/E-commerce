import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../utils/productSlice";

const useCategory = (setFilter, productCategory) => {
  const products = useSelector((store) => store.products.category);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch(
      `https://dummyjson.com/products/category/${productCategory}`
    );
    const json = await data.json();

    dispatch(addProducts({ [productCategory]: json.products }));
  };
  useEffect(() => {
    !products[productCategory] && fetchData();
    setFilter("noFilter");
  }, [productCategory]);
  return products[productCategory];
};
export default useCategory;
