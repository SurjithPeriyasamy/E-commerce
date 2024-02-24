import { useDispatch, useSelector } from "react-redux";
import ThemeContainer from "./ThemeContainer";
import { BiCloset } from "react-icons/bi";
import { closeSideBar } from "../utils/sideBarSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FcAbout } from "react-icons/fc";
import { PiSignOutBold } from "react-icons/pi";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LuUser } from "react-icons/lu";
import CategoryList from "./CategoryList";
import { FaCaretDown } from "react-icons/fa6";
import { useState } from "react";
import useCategoryList from "../hooks/useCategoryList";
const SideBar = () => {
  const [showCategoryList, setShowCategoryList] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoryList = useCategoryList();
  const loggedInUser = useSelector((store) => store.user.loggedInUser);
  const { isMenuOpen } = useSelector((store) => store.sideBar);

  const handleMenu = () => {
    dispatch(closeSideBar());
  };
  const handleUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div
      className={`lg:hidden fixed h-screen overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-thumb-slate-800 scrollbar-thumb-rounded-xl ${
        isMenuOpen ? "left-0" : "-left-full"
      } top-0 z-50 dark:bg-[#1D232A] bg-white dark:text-gray-400 p-5 sm:w-1/2  w-3/4 duration-300`}
    >
      <BiCloset
        onClick={handleMenu}
        className="text-right text-2xl ml-auto cursor-pointer mb-10"
      />
      <div className="sm:h-40 h-28 mb-4 flex flex-col gap-2 items-center">
        <div className="sm:max-h-24 max-h-16 ">
          {loggedInUser ? (
            <img
              src={loggedInUser.photoURL}
              alt="user"
              className="rounded-full h-full shadow-2xl"
            />
          ) : (
            <LuUser size={40} />
          )}
        </div>
        {loggedInUser ? (
          <h1 className="tracking-widest font-semibold">
            {loggedInUser.email}
          </h1>
        ) : (
          <Link to={"/signup"} className="underline">
            Go to login
          </Link>
        )}
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">Change Theme</span>
        <ThemeContainer />
      </div>
      <ul className="*:py-7 sm:pt-10 pt-2">
        <li>
          <Link to={"/"} className="flex gap-1 items-center">
            <FaHome />
            Home
          </Link>
        </li>
        <li>
          <div
            onClick={() => setShowCategoryList(!showCategoryList)}
            className="flex gap-1 items-center cursor-pointer"
          >
            <MdCategory />
            Categories
            <FaCaretDown
              className={`${
                showCategoryList ? "rotate-180" : "rotate-0"
              } duration-300`}
            />
          </div>
          <div
            className={`${
              showCategoryList
                ? `grid-rows-[${categoryList.length}fr] opacity-100`
                : "opacity-0 grid-rows-[0fr] h-0"
            }  duration-300 ease-in-out pl-10 grid overflow-hidden`}
          >
            <CategoryList />
          </div>
        </li>
        <li>
          <Link to={"/about"} className="flex gap-1 items-center">
            <FcAbout />
            About
          </Link>
        </li>

        {loggedInUser && (
          <>
            <li>
              <Link to={"/user"} className="flex gap-1 items-center">
                <ImProfile />
                Manage Your Profile
              </Link>
            </li>
            <li>
              <button onClick={handleUser} className="flex gap-1 items-center">
                <PiSignOutBold />
                Sign out
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default SideBar;
