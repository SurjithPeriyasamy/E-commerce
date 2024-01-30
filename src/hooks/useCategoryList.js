import { useEffect, useState } from "react";

const useCategoryList = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products/categories");
    const json = await data.json();
    setCategoryList(json);
  };
  return categoryList;
};
export default useCategoryList;
