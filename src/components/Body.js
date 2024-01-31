import React from "react";
import MainContainer from "./MainContainer";
import CategoryButtons from "./CategoryButtons";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="comp-top-space space-y-10 max-w-7xl mx-auto">
      <MainContainer />
      <div className="text-3xl w-fit mx-auto text-center dark:text-gray-600 first-letter:text-5xl font-bold">
        <h1>Our Best Products</h1>
      </div>
      <CategoryButtons />
      <Outlet />
    </div>
  );
};

export default Body;
