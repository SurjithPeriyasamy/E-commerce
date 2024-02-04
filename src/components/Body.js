import React from "react";
import MainContainer from "./MainContainer";
import CategoryButtons from "./CategoryButtons";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="comp-top-space space-y-10 max-w-7xl mx-auto">
      <MainContainer />
      <div className=" w-fit mx-auto">
        <h3 className="text-3xl dark:text-gray-600 first-letter:text-5xl font-bold">
          Our Best Products
        </h3>
      </div>
      <CategoryButtons />
      <Outlet />
    </div>
  );
};

export default Body;
