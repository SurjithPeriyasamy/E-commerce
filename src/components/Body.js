import React from "react";
import MainContainer from "./MainContainer";
import CategoryButtons from "./CategoryButtons";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="comp-top-space space-y-10 max-w-7xl mx-auto">
      <MainContainer />
      <div className="first-letter:text-5xl w-fit mx-auto">
        <span className="text-3xl dark:text-gray-600  font-bold">
          Our Best Products
        </span>
      </div>
      <CategoryButtons />
      <Outlet />
    </div>
  );
};

export default Body;
