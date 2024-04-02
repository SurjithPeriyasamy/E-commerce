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
import useCartItems from "../hooks/useCartItems";
import WishList from "./WishList";
import { showWishList } from "../utils/wishListSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { userPopUp, loggedInUser } = useSelector((store) => store.user);
  const isSearchActive = useSelector((store) => store.search.isSearchActive);
  const isShowWishList = useSelector((store) => store.wishlist.showWishList);

  const { totalCartItems } = useCartItems();

  const handleShowWishList = () => {
    dispatch(showWishList());
  };
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
          <div className="h-12 lg:h-full dark:bg-transparent p-[2px] rounded-xl">
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
                <div className="absolute z-50 invisible left-0 top-6 group-hover:visible grid grid-cols-2 gap-y-1 gap-x-2 duration-300 bg-white dark:bg-[#2A323C] dark:text-gray-300 font-medium  shadow-lg w-[400px] rounded-lg text-black py-2 px-5">
                  <CategoryList />
                </div>
              </li>
              <li className="order-4">
                <Link to={"/contact"}>Contact</Link>
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
            <li className="mr-2 relative">
              <Link to={"/cart"}>
                <FiShoppingCart size={24} />

                <div
                  className={
                    (totalCartItems
                      ? "opacity-100 -top-2"
                      : "opacity-0 -top-5") +
                    " duration-300 absolute font-black flex justify-center items-center left-4 h-5 w-5 z-30 bg-white text-red-700 p-3 text-xs rounded-full"
                  }
                >
                  {totalCartItems}
                </div>
              </Link>
            </li>
            <li>
              <FaHeart
                size={20}
                onClick={handleShowWishList}
                className="text-red-500 cursor-pointer"
              />
              <div
                className={`text-black font-normal text-base tracking-normal z-30 absolute top-0 ${
                  isShowWishList ? "right-0" : "-right-full"
                } duration-300 bg-white px-3 pb-5 dark:bg-gray-800 shadow-lg rounded-bl-lg max-w-lg w-full h-dvh`}
              >
                <WishList />
              </div>
            </li>
            <li className="w-full">
              {loggedInUser ? (
                <img
                  onClick={handlePopUp}
                  src={loggedInUser.photoURL}
                  alt="user"
                  className="size-10 cursor-pointer rounded-full"
                />
              ) : (
                <Link to={"/signUp"}>
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
      <div className="lg:hidden bg-[#1D232A] lg:py-4 max-lg:py-2 border-t border-zinc-500 flex justify-center px-2">
        <SearchBar isSearch={isSearchActive} />
      </div>
    </div>
  );
};
export default Header;
