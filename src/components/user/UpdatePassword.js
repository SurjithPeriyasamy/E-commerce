import React, { useRef, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import UpdateButton from "./UpdateButton";
import { auth } from "../../utils/firebase";
import { updatePassword } from "firebase/auth";
import { passwordValidation } from "../../utils/helper";
import SuccessMessage from "./SuccessMessage";
import PasswordInput from "../PasswordInput";

const UpdatePassword = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const password = useRef(null);
  const handlePasswordChange = () => {
    const isPasswordCorrect = passwordValidation(password.current.value);
    if (!isPasswordCorrect) return setError("Enter a valid Password");
    setLoading(true);
    updatePassword(auth.currentUser, password.current.value)
      .then(() => {
        // Update successful.
        setLoading(false);
        setError("");
        setSuccess(true);
        password.current.value = "";
        setTimeout(() => setSuccess(false), 2000);
      })
      .catch((error) => {
        // An error ocurred
        // ...
      });
  };

  return (
    <div>
      <div className="flex justify-evenly items-center flex-col sm:flex-row max-sm:gap-2">
        <h1 className="font-semibold dark:text-[#A6ADBA] text-lg w-[15%] hidden sm:block">
          Password
        </h1>
        <div className="sm:w-1/2 w-full ">
          <PasswordInput password={password} />
          {error && <ErrorMessage error={error} />}
          {success && (
            <SuccessMessage
              styles={"text-black font-semibold text-xs tracking-wider"}
              typeName={"Password"}
            />
          )}
        </div>
        <UpdateButton handleUpdate={handlePasswordChange} loading={loading} />
      </div>
    </div>
  );
};

export default UpdatePassword;
