import { useRef, useState } from "react";
import { validate } from "../../utils/validate";
import { auth } from "../../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { USER_IMAGE_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import PasswordInput from "../PasswordInput";

const UserForm = ({ isSignIn }) => {
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleForm = (e) => {
    e.preventDefault();

    if (!isSignIn) {
      const validateError = validate(
        name.current.value,
        email.current.value,
        password.current.value
      );
      if (validateError) return setError(validateError);
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
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
          // ..
        });
    }
    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
        })
        .catch((error) => {
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
      <PasswordInput password={password} />
      {error && (
        <span className="text-red-500 text-sm tracking-wider text-left">
          {error}
        </span>
      )}
      <button className="text-cyan-400 font-semibold w-1/2 shadow-sm shadow-fuchsia-400 hover:shadow-none hover:translate-y-2 duration-200 p-2 text-sm rounded-lg">
        {isSignIn ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};
export default UserForm;
