import { useDispatch, useSelector } from "react-redux";
import ThemeContainer from "./ThemeContainer";
import { BiCloset } from "react-icons/bi";
import { closeSideBar } from "../utils/sideBarSlice";
import { Link } from "react-router-dom";
const SideBar = () => {
  const dispatch = useDispatch();

  const { isMenuOpen } = useSelector((store) => store.sideBar);
  const handleMenu = () => {
    dispatch(closeSideBar());
  };
  return (
    <div
      className={`absolute ${
        isMenuOpen ? "left-0" : "-left-full"
      } top-0 z-50 bg-white dark:bg-slate-900 dark:text-gray-50 h-screen p-5  w-1/2 duration-300`}
    >
      <BiCloset
        onClick={handleMenu}
        className="text-right text-2xl ml-auto cursor-pointer mb-10"
      />
      <div className="flex justify-between">
        <span className="font-semibold">Change Theme</span>
        <ThemeContainer />
      </div>
      <ul className="space-y-9 pt-10">
        <li className="border-b-4">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="border-b-4">
          <Link to={"/categories"}>Categories</Link>
        </li>
        <li className="border-b-4">
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
