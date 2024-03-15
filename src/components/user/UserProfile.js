import { useDispatch, useSelector } from "react-redux";
import UpdateName from "./UpdateName";
import { MdDelete } from "react-icons/md";
import UpdatePassword from "./UpdatePassword";
import { deleteUser } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { RiImageEditFill } from "react-icons/ri";
import { useState } from "react";
import { removeUser } from "../../utils/userSlice";
import UpdatePhoto from "./UpdatePhoto";

const EditUserProfile = () => {
  const [changePic, setChangePic] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const loggedInUser = useSelector((store) => store.user.loggedInUser);
  const currentUser = auth.currentUser;

  const handleDelete = () => {
    deleteUser(currentUser)
      .then(() => {
        // User deleted.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error ocurred
        // ...
        console.log(error);
      });
  };

  if (!loggedInUser) return null;
  return (
    <div className="comp-top-space">
      <div className="absolute max-lg:top-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:bg-gradient-to-r dark:from-[#2A323C] dark:to-[#2A323C] bg-gradient-to-r from-teal-600 to-teal-200 rounded-3xl lg:w-1/2 w-11/12 max-[400px]:w-full p-3">
        <UpdatePhoto
          changePic={changePic}
          setChangePic={setChangePic}
          loggedInUser={loggedInUser}
          currentUser={currentUser}
        />
        <div className="flex flex-col items-center justify-between gap-5">
          <span className="h-20 bg-slate-700 bg-opacity-45 absolute -z-30 rounded-t-3xl w-full top-0"></span>
          <div className="relative">
            <img
              src={loggedInUser?.photoURL}
              alt="use"
              className="size-28 mt-2 rounded-full p-1"
            />
            <RiImageEditFill
              onClick={() => setChangePic(true)}
              className="absolute bottom-3 right-2 cursor-pointer text-black bg-white rounded-full p-[3px] shadow-lg text-2xl "
            />
          </div>
          <h2 className="text-xl tracking-widest font-bold dark:text-[#A6ADBA]">
            Update Your Profile
          </h2>
          <div className="text-white w-full flex flex-col gap-5">
            <UpdateName photoURL={loggedInUser?.photoURL} />
            {/* <UpdateEmail /> */}
            <UpdatePassword />
            <div className="mx-auto">
              <button
                onClick={handleDelete}
                className="bg-red-600 p-2 rounded-md flex gap-1 items-center justify-center"
              >
                Delete Account <MdDelete className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditUserProfile;
