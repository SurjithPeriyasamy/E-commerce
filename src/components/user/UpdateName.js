import { auth } from "../../utils/firebase";
import { updateProfile } from "firebase/auth";
import { namevalidation } from "../../utils/helper";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import UpdateButton from "./UpdateButton";
import ErrorMessage from "./ErrorMessage";
import UpdateSuccess from "./SuccessMessage";

const UpdateName = ({ photoURL }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const name = useRef(null);
  const handleNameChange = () => {
    const isNameCorrect = namevalidation(name.current.value);
    !isNameCorrect
      ? setError("Enter a valid username")
      : (setLoading(true),
        updateProfile(auth.currentUser, {
          displayName: name.current.value,
          photoURL: photoURL,
        }))
          .then(() => {
            // Profile updated!
            const { email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ email, displayName, photoURL }));
            setLoading(false);
            setError("");
            setSuccess(true);
            name.current.value = "";
            setTimeout(() => setSuccess(false), 2000);
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
  };
  return (
    <div>
      <div className="flex justify-evenly items-center flex-col max-sm:gap-2 sm:flex-row">
        <h1 className="font-semibold dark:text-[#A6ADBA] text-lg w-[15%] hidden sm:block">
          Username
        </h1>
        <div className="sm:w-1/2 w-full">
          <input
            ref={name}
            type="text"
            placeholder="Username"
            className="bg-slate-600 rounded-md py-2 placeholder:text-slate-300 px-5 focus:outline-none w-full"
          />
          {error && <ErrorMessage error={error} />}
          {success && (
            <UpdateSuccess
              styles={"text-black font-semibold text-xs tracking-wider"}
              typeName={"Name"}
            />
          )}
        </div>
        <UpdateButton handleUpdate={handleNameChange} loading={loading} />
      </div>
    </div>
  );
};
export default UpdateName;
