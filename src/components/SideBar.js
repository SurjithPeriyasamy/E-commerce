import IsDarkMode from "./IsDarkMode";
import { BiCloset } from "react-icons/bi";
const SideBar = ({ darkMode }) => {
  //side bar functionalities will put into redux
  return (
    <div className=" absolute top-0 -left-full z-50 bg-white h-screen p-5  w-1/2">
      <BiCloset className="text-right text-2xl ml-auto cursor-pointer" />
      <ul className="divide-y-4 space-y-9 pt-10">
        <li className="flex justify-between">
          <span className="font-semibold">Change Theme</span>
          <IsDarkMode isdark={darkMode} />
        </li>
        <li>Home</li>
        <li>Categories</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default SideBar;
