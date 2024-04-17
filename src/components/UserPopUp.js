import { PiSignOutBold } from "react-icons/pi";
import { ImProfile } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { closePopUp } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";

const UserPopUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector((store) => store.user.loggedInUser);
  const handleUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(closePopUp());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handlePopUp = () => {
    dispatch(closePopUp());
  };
  return (
    loggedInUser && (
      <div className="flex flex-col gap-5 items-center relative top-0">
        <IoClose
          onClick={handlePopUp}
          className="absolute right-0 text-2xl cursor-pointer"
        />
        <h2 className="w-11/12 truncate pr-2 text-center">
          {loggedInUser.email}
        </h2>
        <div className="border-4 rounded-full border-white dark:border-fuchsia-500 p-1">
          <img
            src={loggedInUser.photoURL}
            alt="use"
            className="h-20 w-20 rounded-full"
          />
        </div>
        <h2 className="truncate">Hello {loggedInUser.displayName}!!!</h2>
        <Link to={"/user"}>
          <button
            onClick={handlePopUp}
            className="shadow-lg dark:bg-black dark:bg-opacity-50 px-3 py-1 rounded-lg flex items-center gap-2"
          >
            Manage Your Profile
            <ImProfile />
          </button>
        </Link>
        <button
          onClick={handleUser}
          className="px-3 py-1 bg-rose-400 shadow-lg dark:bg-black dark:bg-opacity-50 flex gap-1 items-center rounded-lg"
        >
          <PiSignOutBold size={23} />
          Sign out
        </button>
      </div>
    )
  );
};
export default UserPopUp;
