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
import { Fade } from "react-awesome-reveal";

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
    <div className="fixed font-semibold  dark:bg-[#1D232A] dark:text-[#A6ADBA] min-[2000px]:scale-125 left-0 top-0 z-50 w-full ">
      {/* <Fade
        duration={100}
        cascade
        className="w-full bg-red-500 dark:text-cyan-500 dark:bg-[#1D232A] py-1 font-bold text-sm tracking-widest text-center"
      >
        Hello Buddy !!! Elevate Your Style with Me
      </Fade> */}
      <div className="flex bg-[#30d5c8]  dark:bg-[#1D232A]  h-[70px] shadow-xl  justify-between max-w-7xl lg:max-w-[90%] items-center mx-auto px-5 py-2 rounded-b-lg">
        <div className="w-1/2 lg:w-1/5 flex items-center gap-3 select-none h-full">
          <GiHamburgerMenu
            size={26}
            className="lg:hidden cursor-pointer"
            onClick={handleMenu}
          />
          <div className="h-full dark:bg-transparent p-[2px] dark:p-0 rounded-xl">
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
                  className="h-[45px] w-[45px] cursor-pointer rounded-full"
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
        <div className="absolute top-[70px] p-5 xl:right-44 right-3 lg:w-[30%] md:w-1/2 w-3/4 max-h-96 text-black dark:text-white dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-800 bg-gradient-to-tr from-teal-800 to-teal-300 rounded-3xl ">
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
