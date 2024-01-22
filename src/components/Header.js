import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import SearchBar from "./SearchBar";
import IsDarkMode from "./IsDarkMode";

const Header = ({ setIsDark, isdark }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <div className="fixed min-[2000px]:scale-125 left-0 top-0 z-50 w-full text-red-300 dark:text-gray-400 font-semibold bg-[#3d3b48] dark:bg-gray-950">
      <div className="flex justify-between xl:w-[80%] items-center mx-auto py-3 px-5 xl:px-0">
        <div className="basis-1/5 flex items-center gap-3 select-none">
          <GiHamburgerMenu size={26} className="lg:hidden" />
          <Fade cascade damping={1e-1} duration={500}>
            SurjithKart
          </Fade>
        </div>
        <ul className="lg:flex justify-between hidden basis-[36%] items-center">
          {!isSearchActive && (
            <>
              <li>Home</li>
              <li>Categories</li>
            </>
          )}
          <li className={isSearchActive && "w-full"}>
            <SearchBar
              isSearch={isSearchActive}
              setSearch={setIsSearchActive}
            />
          </li>
          {!isSearchActive && <li>About</li>}
        </ul>
        <div className="scale-90 lg:basis-1/4  basis-2/5">
          <ul className="flex justify-between items-center tracking-[2px] ">
            <li className="sm:block hidden">
              <IsDarkMode setIsDark={setIsDark} isdark={isdark} />
            </li>
            <li>
              <FiShoppingCart size={25} />
            </li>
            <li>
              <FaHeart size={27} className="text-red-500" />
            </li>

            <li>
              <LuUser2 size={25} />
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:hidden border-y border-zinc-500 flex justify-center pt-2 px-2">
        <SearchBar isSearch={isSearchActive} setSearch={setIsSearchActive} />
      </div>
    </div>
  );
};
export default Header;
