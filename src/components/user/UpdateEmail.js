import {
  EmailAuthProvider,
  applyActionCode,
  reauthenticateWithCredential,
  updateEmail,
  verifyBeforeUpdateEmail,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../../utils/firebase";
import { addUser } from "../../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { emailValidation } from "../../utils/helper";
import UpdateButton from "./UpdateButton";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

const UpdateEmail = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const loggedInUser = useSelector((store) => store.user.loggedInUser);
  const userEmail = useRef(null);
  const dispatch = useDispatch();
  const credential = EmailAuthProvider.credential(
    loggedInUser.email,
    "Baby@123"
  );

  const handleEmailChange = async () => {
    const isEmailCorrect = emailValidation(userEmail.current.value);
    if (userEmail.current.value === loggedInUser.email)
      return setError("Please enter a new email");
    if (!isEmailCorrect) return setError("Enter a valid email address");
    else {
      setLoading(true);
      await reauthenticateWithCredential(auth.currentUser, credential)
        .then(() => {})
        .catch((err) => setError(err));

      verifyBeforeUpdateEmail(auth.currentUser, "newemail@example.com").then(
        () => {
          applyActionCode(auth, "thal2ai235var");
          setError("");
          setSuccess(true);
          setLoading(false);
          setTimeout(() => setSuccess(false), 3000);
        }
      );
      // updateEmail(auth.currentUser, userEmail.current.value)
      //   .then(() => {
      //     // Email updated!
      //     dispatch(addUser({ ...loggedInUser, email: auth.currentUser.email }));
      //     setError("");
      //     setSuccess(true);
      //     setLoading(false);
      //     setTimeout(() => setSuccess(false), 3000);
      //   })
      //   .catch((error) => {
      //     // An error occurred
      //     // ...
      //     setError(error);
      //   });
    }
  };
  return (
    <div>
      <div className="flex justify-evenly items-center flex-col max-sm:gap-2 sm:flex-row">
        <h1 className="font-semibold text-lg w-[15%] hidden sm:block">Email</h1>
        <div className="sm:w-1/2 w-full">
          <input
            ref={userEmail}
            type="text"
            placeholder="eg..enjoy123@gmail.com"
            className="bg-slate-600 rounded-md py-2 placeholder:text-slate-300 px-5 focus:outline-none w-full"
          />
          {error && <ErrorMessage error={error} />}
          {success && (
            <SuccessMessage
              styles={"text-black font-semibold text-xs tracking-wider"}
              typeName={"Email"}
            />
          )}
        </div>
        <UpdateButton loading={loading} handleUpdate={handleEmailChange} />
      </div>
    </div>
  );
};

export default UpdateEmail;
