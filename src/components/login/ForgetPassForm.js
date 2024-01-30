import React, { useRef, useState } from "react";
import { auth } from "../../utils/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import ErrorMessage from "../user/ErrorMessage";
import { MdDone } from "react-icons/md";
import { emailValidation } from "../../utils/helper";
const ForgetPassForm = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);

  const email = useRef(null);
  const handleForgetPassword = (e) => {
    e.preventDefault();
    if (!emailValidation(email.current.value)) {
      setError("Enter a valid email address ");
      setMessage(false);
      return;
    }
    sendPasswordResetEmail(auth, email.current.value)
      .then(() => {
        // Password reset email sent!
        setMessage(true);
        setError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setError(errorMessage);
      });
  };
  return (
    <form
      onSubmit={handleForgetPassword}
      className=" flex flex-col gap-5 font-semibold items-center justify-center w-full"
    >
      <h2 className="text-sm">
        Please enter your email address to search for your account.
      </h2>
      <input
        ref={email}
        type="text"
        placeholder="eg..enjoy123@gmail.com"
        className="bg-slate-600 rounded-md py-2 placeholder:text-slate-300 px-5 focus:outline-none w-full"
      />
      {error && (
        <span className="text-orange-400 text-sm text-start w-full">
          Please {error}
        </span>
      )}
      {message && (
        <span className="flex items-center text-center w-full gap-1 text-emerald-600">
          Email sent successfully
          <MdDone size={20} />
        </span>
      )}
      <button className="text-cyan-400 font-semibold w-1/2 shadow-sm shadow-fuchsia-400 hover:shadow-none hover:translate-y-2 duration-200 p-2 text-sm rounded-lg">
        Send email
      </button>
    </form>
  );
};

export default ForgetPassForm;
