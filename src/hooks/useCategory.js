import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../utils/productSlice";
import { useParams } from "react-router-dom";

const useCategory = (setFilter, productCategory) => {
  // const [skipProductsCount, setSkipProductsCount] = useState(0);

  // const { name } = useParams();
  // const productCategory = name ?? "allProducts";

  const products = useSelector((store) => store.products.category);
  const dispatch = useDispatch();

  const fetchData = async () => {
    // const data = await fetch(
    //   `https://dummyjson.com/products/${name ? "category/" + name : ""}`
    // );
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

  // const fetchAllProducts = async () => {
  //   const data = await fetch(
  //     `https://dummyjson.com/products?limit=20&skip=${skipProductsCount}`
  //   );
  //   const json = await data.json();

  //   dispatch(
  //     addProducts({
  //       allProducts: !products["allProducts"]
  //         ? json.products
  //         : [...products["allProducts"], ...json.products],
  //     })
  //   );
  // };

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop + 1 >=
  //     document.documentElement.scrollHeight
  //   ) {
  //     setSkipProductsCount((prev) => prev + 20);
  //   }
  // };
  // console.log(skipProductsCount);
  // useEffect(() => {
  //   if (productCategory === "allProducts") {
  //     if (products["allProducts"]) {
  //       if (products["allProducts"]?.length <= 100) {
  //         fetchAllProducts();
  //       }
  //     } else {
  //       fetchAllProducts();
  //     }
  //   }
  // }, [skipProductsCount]);

  // useEffect(() => {
  //   const scroll =
  //     skipProductsCount <= 80 &&
  //     window.addEventListener("scroll", handleScroll);
  //   return () => scroll;
  // }, []);

  // const sortedProducts = () => {
  //   switch (filter) {
  //     case "topRated":
  //       return products[productCategory].filter(
  //         (product) => product.rating > 4.5
  //       );
  //     case "lowToHigh":
  //       return [...products[productCategory]].sort((a, b) => a.price - b.price);
  //     case "highToLow":
  //       return [...products[productCategory]].sort((a, b) => b.price - a.price);
  //     default:
  //       return products[productCategory];
  //   }
  // };

  // return [products[productCategory] && sortedProducts(), productCategory];
};
export default useCategory;
