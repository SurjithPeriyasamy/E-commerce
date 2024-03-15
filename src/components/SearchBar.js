import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { openSearch } from "../utils/searchSlice";
import { Slide } from "react-awesome-reveal";
import useSearchSuggestion from "../hooks/useSearchSuggestion";
const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const { suggestions, isSearchActive } = useSearchSuggestion(searchText);

  const handleChange = (e) => {
    setSearchText(e.target.value);
    dispatch(openSearch());
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className={`flex justify-end items-center ${
          isSearchActive && "w-full"
        }`}
      >
        <button
          onClick={() => {
            dispatch(openSearch());
          }}
          className="p-[1px] px-3  flex gap-1"
        >
          <IoSearch size={25} />
          {!isSearchActive && "Search"}
        </button>
        <input
          onChange={handleChange}
          className={
            "font-normal  placeholder:text-gray-400 bg-transparent outline-none  border-b border-gray-400 duration-300 transition-all placeholder:text-sm " +
            (isSearchActive ? "w-full p-[2px] px-3" : " w-0")
          }
          type="text"
          placeholder="Search for products..."
        />
      </div>
      {isSearchActive && searchText && (
        <div className="absolute  lg:left-0 left-[10%] lg:top-12 top-28 lg:w-[500px]  lg:max-h-[550px] max-h-[380px] w-4/5 flex flex-col text-black font-medium dark:text-gray-300 overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-thumb-gray-600 gap-2 text-sm shadow-lg bg-white dark:bg-gray-800 p-4 px-8 rounded-lg">
          {suggestions.length ? (
            suggestions.map((s, i) => (
              <Slide direction="up" key={i}>
                <Link
                  to={`products/${s.id}`}
                  className="flex items-center gap-5 text-sm font-bold p-1 duration-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
                >
                  <img
                    src={s.thumbnail}
                    alt="thumbnail"
                    className="size-11 object-cover rounded-md"
                  />
                  {s.title}
                </Link>
              </Slide>
            ))
          ) : (
            <p className="text-red-500 dark:text-white">
              <span className="text-lg">😔</span>Items are not found!!! Please
              Search for other items
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
