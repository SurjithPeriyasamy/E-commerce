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
    dispatch(
      addProducts({
        [category]: json.products,
      })
    );
    setLoading(false);
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
    const scroll = window.addEventListener("scroll", handleScroll);
    setFilter("noFilter");
    return () => scroll;
  }, []);
};
export default useAllProducts;
