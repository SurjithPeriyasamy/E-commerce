import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchCache } from "../utils/searchSlice";

const useSearchSuggestion = (searchText) => {
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const { searchCache, isSearchActive, allSearchProducts } = useSelector(
    (store) => store.search
  );

  const getSearchResults = useCallback(() => {
    const list = allSearchProducts.filter((product) =>
      product.title
        .replace(/ /g, "")
        .toLowerCase()
        .includes(searchText.replace(/ /g, "").toLowerCase())
    );
    dispatch(addSearchCache({ [searchText]: list }));
    setSuggestions(list);
  }, [searchText]);

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
