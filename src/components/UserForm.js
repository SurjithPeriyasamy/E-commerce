import { useRef, useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { signUpValidate } from "../utils/signUpValidate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { signInValidate } from "../utils/signInValidate";
import { USER_IMAGE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const UserForm = ({ isSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleForm = (e) => {
    e.preventDefault();
    const validateError = isSignIn
      ? signInValidate(email.current.value, password.current.value)
      : signUpValidate(
          name.current.value,
          email.current.value,
          password.current.value
        );
    setError(validateError);
    if (!validateError && !isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_IMAGE_URL,
          })
            .then(() => {
              // Profile updated!
              const { email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ email, displayName, photoURL }));
            })
            .catch((error) => {
              // An error occurred
              // ...
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
          // ..
        });
    }
    if (!validateError && isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };
  return (
    <form
      onSubmit={handleForm}
      className=" flex flex-col gap-5 font-semibold items-center justify-center w-full"
    >
      {!isSignIn && (
        <input
          ref={name}
          type="text"
          placeholder="Username"
          className="bg-slate-600 rounded-md py-2 placeholder:text-slate-300 px-5 focus:outline-none w-full"
        />
      )}

      <input
        ref={email}
        type="text"
        placeholder="eg..enjoy123@gmail.com"
        className="bg-slate-600 rounded-md py-2 placeholder:text-slate-300 px-5 focus:outline-none w-full"
      />

      <div className="bg-slate-600 rounded-md py-2 px-5 w-full flex gap-2 justify-between items-center">
        <input
          ref={password}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="bg-transparent placeholder:text-slate-300 focus:outline-none w-11/12"
        />
        <span
          className="text-2xl cursor-pointer w-1/12"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
        </span>
      </div>
      {error && (
        <span className="text-red-500 text-sm tracking-wider text-left">
          {error}
        </span>
      )}
      <button className="text-cyan-400 font-semibold w-1/2 shadow-sm shadow-fuchsia-400 hover:shadow-none hover:mt-1 p-2 text-sm rounded-lg">
        {isSignIn ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};
export default UserForm;
