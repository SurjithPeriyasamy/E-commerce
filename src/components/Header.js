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
import { FaCaretDown } from "react-icons/fa";
import CategoryList from "./CategoryList";

const Header = () => {
  const dispatch = useDispatch();
  const { userPopUp, loggedInUser } = useSelector((store) => store.user);
  const isSearchActive = useSelector((store) => store.search.isSearchActive);
  const handleMenu = () => {
    dispatch(openSideBar());
  };
  const handlePopUp = () => {
    dispatch(togglePopUp());
  };
  return (
    <div className="fixed font-semibold  dark:bg-[#1D232A] text-[#A6ADBA] min-[2000px]:scale-125 left-0 top-0 z-50 w-full ">
      <div className="flex bg-[#1D232A]  h-[70px] shadow-xl  justify-between max-w-7xl lg:max-w-[90%] items-center mx-auto px-5 py-2 md:rounded-b-lg">
        <div className="w-1/2 lg:w-1/5 flex items-center gap-3 select-none h-full">
          <GiHamburgerMenu
            size={26}
            className="lg:hidden cursor-pointer"
            onClick={handleMenu}
          />
          <div className="h-full dark:bg-transparent p-[2px] rounded-xl">
            <Brand />
          </div>
        </div>
        <ul className="lg:flex justify-between hidden basis-[36%] items-center relative">
          {!isSearchActive && (
            <>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li className="group relative">
                <div className="flex items-end gap-1 cursor-pointer">
                  Categories{" "}
                  <FaCaretDown
                    size={20}
                    className="group-hover:rotate-180 duration-500"
                  />
                </div>
                <div className="absolute z-50 hidden left-0 group-hover:top-6 -top-full group-hover:grid grid-cols-2 gap-y-1 gap-x-2 duration-300 bg-white dark:bg-[#2A323C] dark:text-gray-300 font-medium  shadow-lg w-[400px] rounded-lg text-black py-2 px-5">
                  <CategoryList />
                </div>
              </li>
              <li className="order-4">
                <Link to={"/about"}>About</Link>
              </li>
            </>
          )}
          <li className={isSearchActive ? "w-full " : ""}>
            <SearchBar />
          </li>
        </ul>
        <div className="">
          <ul className="flex w-full justify-between items-center tracking-[2px] gap-7">
            <li className="sm:block hidden">
              <ThemeContainer />
            </li>
            <li>
              <Link to={"/cart"}>
                <FiShoppingCart size={20} />
              </Link>
            </li>
            <li>
              <FaHeart size={20} className="text-red-500" />
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
                  <LuUser2 size={20} />
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
      <div className="lg:hidden bg-[#1D232A] py-4 dark:py-0 border-t border-zinc-500 flex justify-center pt-2 px-2">
        <SearchBar isSearch={isSearchActive} />
      </div>
    </div>
  );
};
export default Header;
