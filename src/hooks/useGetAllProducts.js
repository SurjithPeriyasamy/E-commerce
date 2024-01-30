import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAllProducts } from "../utils/productSlice";

const useGetAllProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=100");
    const json = await data.json();
    dispatch(addAllProducts(json?.products));
  };
};
export default useGetAllProducts;
