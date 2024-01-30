import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchCache } from "../utils/searchSlice";

const useSearchSuggestion = (searchText) => {
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const allProducts = useSelector((store) => store.products.allProducts);
  const { searchCache, isSearchActive } = useSelector((store) => store.search);

  const getSearchResults = () => {
    const list = allProducts.filter((product) =>
      product.title
        .replace(/ /g, "")
        .toLowerCase()
        .includes(searchText.replace(/ /g, "").toLowerCase())
    );
    dispatch(addSearchCache({ [searchText]: list }));
    setSuggestions(list);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      searchCache[searchText]
        ? setSuggestions(searchCache[searchText])
        : getSearchResults();
    }, 200);
    return () => clearTimeout(timer);
  }, [searchText]);

  return { suggestions, isSearchActive };
};
export default useSearchSuggestion;
