import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../utils/productSlice";

const useAllProducts = (category, setFilter, setLoading) => {
  const [productsCount, setProductsCount] = useState(10);
  const products = useSelector((store) => store.products.category);
  const dispatch = useDispatch();

  const fetchAllProducts = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${productsCount}`
    );
    const json = await data.json();
    setLoading(false);
    dispatch(
      addProducts({
        [category]: json.products,
      })
    );
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setProductsCount((prev) => prev + 10);
    }
  };

  useEffect(() => {
    if (!products[category]) {
      fetchAllProducts();
    } else if (products[category].length < 100) {
      setLoading(true);
      setTimeout(() => {
        fetchAllProducts();
      }, 1500);
    }
  }, [productsCount]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setFilter("noFilter");
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return products[category];
};
export default useAllProducts;
