import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import { storage } from "../../utils/firebase";
import { addUser } from "../../utils/userSlice";
import { IoMdCloseCircle } from "react-icons/io";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useDispatch } from "react-redux";
import SuccessMessage from "./SuccessMessage";
const UpdatePhoto = ({
  currentUser,
  loggedInUser,
  changePic,
  setChangePic,
}) => {
  const [photo, setPhoto] = useState(null);
  const [imageValue, setImageValue] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
      setImageValue(e.target.value);
    }
  };
  const updatePhoto = async () => {
    setLoading(true);
    const fileRef = ref(storage, "images/" + currentUser.uid + ".png");
    await uploadBytes(fileRef, photo);
    const photoURL = await getDownloadURL(fileRef);
    updateProfile(currentUser, { photoURL }).then(() => {
      dispatch(addUser({ ...loggedInUser, photoURL: currentUser.photoURL }));
      setLoading(false);
      setImageValue("");
      setSuccessMessage(true);
      setTimeout(() => setSuccessMessage(false), 4000);
    });
  };
  return (
    <div
      className={`absolute ${
        changePic ? "top-2 opacity-100" : "top-[95%] opacity-0"
      } duration-300  left-1/2 -translate-x-1/2 shadow-lg bg-white z-40 p-3 flex flex-col gap-5 items-center rounded-lg sm:w-3/4 w-11/12`}
    >
      <IoMdCloseCircle
        onClick={() => setChangePic(false)}
        className="absolute right-4 text-2xl cursor-pointer"
      />
      <div className="size-28">
        <img
          src={loggedInUser?.photoURL}
          alt="use"
          className={
            "size-full rounded-full p-1 " +
            (loading ? "animate-pulse-fast" : "")
          }
        />
      </div>
      {successMessage && (
        <SuccessMessage
          styles="text-green-600 font-bold text-sm"
          typeName={"Picture"}
        />
      )}
      <div className="flex justify-between w-full">
        <input type="file" onChange={handleChange} value={imageValue} />
        <button
          disabled={loading || !photo}
          className="p-1 px-2 bg-black text-white rounded-lg disabled:bg-gray-400"
          onClick={updatePhoto}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default UpdatePhoto;
