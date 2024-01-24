import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import SearchBar from "./SearchBar";
import ThemeContainer from "./ThemeContainer";
import { useDispatch, useSelector } from "react-redux";
import { openSideBar } from "../utils/sideBarSlice";
import { Link } from "react-router-dom";
import Brand from "./Brand";
import UserPopUp from "./UserPopUp";
import { togglePopUp } from "../utils/userSlice";

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const dispatch = useDispatch();
  const { userPopUp, loggedInUser } = useSelector((store) => store.user);
  const handleMenu = () => {
    dispatch(openSideBar());
  };
  const handlePopUp = () => {
    dispatch(togglePopUp());
  };

  return (
    <div className="fixed min-[2000px]:scale-125 left-0 top-0 z-50 w-full text-red-300 dark:text-gray-400 font-semibold bg-[#3d3b48] dark:bg-black">
      <div className="flex justify-between xl:w-[80%] items-center mx-auto py-3 px-5 xl:px-0">
        <div className="w-1/2 lg:w-1/5 flex items-center gap-3 select-none ">
          <GiHamburgerMenu
            size={26}
            className="lg:hidden cursor-pointer"
            onClick={handleMenu}
          />
          <div className="h-12 ">
            <Brand />
          </div>
        </div>
        <ul className="lg:flex justify-between hidden basis-[36%] items-center">
          {!isSearchActive && (
            <>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/categories"}>Categories</Link>
              </li>
              <li className="order-4">
                <Link to={"/about"}>About</Link>
              </li>
            </>
          )}
          <li className={isSearchActive ? "w-full" : ""}>
            <SearchBar
              isSearch={isSearchActive}
              setSearch={setIsSearchActive}
            />
          </li>
        </ul>
        <div className="scale-90 ">
          <ul className="flex w-full justify-between items-center tracking-[2px] gap-7">
            <li className="sm:block hidden">
              <ThemeContainer />
            </li>
            <li>
              <Link to={"/cart"}>
                <FiShoppingCart size={25} />
              </Link>
            </li>
            <li>
              <FaHeart size={27} className="text-red-500" />
            </li>
            <li className="w-full">
              {loggedInUser ? (
                <img
                  onClick={handlePopUp}
                  src={loggedInUser?.photoURL}
                  alt="user"
                  className="h-[45px] cursor-pointer rounded-full"
                />
              ) : (
                <Link to={"/signUp"} className="">
                  <LuUser2 size={25} />
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
      {userPopUp && (
        <div className="absolute top-[70px] p-5 xl:right-44 right-3 lg:w-[30%] w-1/2 max-h-96 text-black dark:text-white dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-800 bg-gradient-to-tr from-teal-800 to-teal-300 rounded-3xl ">
          <UserPopUp />
        </div>
      )}
      <div className="lg:hidden border-t border-zinc-500 flex justify-center pt-2 px-2">
        <SearchBar isSearch={isSearchActive} setSearch={setIsSearchActive} />
      </div>
    </div>
  );
};
export default Header;
