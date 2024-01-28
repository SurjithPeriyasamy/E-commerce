import React from "react";
import { IoSearch } from "react-icons/io5";
const SearchBar = ({ isSearch, setSearch }) => {
  return (
    <div className={`flex justify-end items-center ${isSearch && "w-full"}`}>
      <input
        onBlur={() => setSearch(false)}
        className={
          "font-normal  placeholder:text-gray-700 bg-transparent focus:outline-none  border-b border-black dark:border-b-cyan-300 duration-300 transition-all  dark:text-cyan-400 dark:placeholder:text-cyan-400 placeholder:text-sm " +
          (isSearch ? "w-full p-[2px] px-3" : " w-0")
        }
        type="text"
        placeholder="Search for products..."
      />
      <button
        onClick={() => setSearch(true)}
        className="p-[1px] px-3  flex gap-1"
      >
        <IoSearch size={25} />
        {!isSearch && "Search"}
      </button>
    </div>
  );
};

export default SearchBar;
