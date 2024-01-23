import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import SearchBar from "./SearchBar";
import ThemeContainer from "./ThemeContainer";
import { useDispatch } from "react-redux";
import { openSideBar } from "../utils/sideBarSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(openSideBar());
  };
  return (
    <div className="fixed min-[2000px]:scale-125 left-0 top-0 z-50 w-full text-red-300 dark:text-gray-400 font-semibold bg-[#3d3b48] dark:bg-[#1d232a]">
      <div className="flex justify-between xl:w-[80%] items-center mx-auto py-3 px-5 xl:px-0">
        <div className="basis-1/5 flex items-center gap-3 select-none">
          <GiHamburgerMenu
            size={26}
            className="lg:hidden cursor-pointer"
            onClick={handleMenu}
          />
          <Fade cascade damping={1e-1} duration={500}>
            <Link to={"/"}>SurjithKart</Link>
          </Fade>
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
          <li className={isSearchActive && "w-full"}>
            <SearchBar
              isSearch={isSearchActive}
              setSearch={setIsSearchActive}
            />
          </li>
        </ul>
        <div className="scale-90 lg:basis-1/4  basis-2/5">
          <ul className="flex justify-between items-center tracking-[2px] ">
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
            <li>
              <Link to={"/signUp"}>
                <LuUser2 size={25} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:hidden border-t border-zinc-500 flex justify-center pt-2 px-2">
        <SearchBar isSearch={isSearchActive} setSearch={setIsSearchActive} />
      </div>
    </div>
  );
};
export default Header;
