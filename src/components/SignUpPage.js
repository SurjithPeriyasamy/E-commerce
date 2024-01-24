import React, { useState } from "react";
import logDark from "../images/logDark.png";
import UserForm from "./UserForm";
import Brand from "./Brand";
import GoogleSignIn from "./GoogleSignIn";

//
const SignUpPage = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSign = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="bg-slate-800 h-screen">
      <div className="w-[75%] 2xl:w-[55%] flex flex-col gap-10 items-center absolute  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="text-white h-20">
          <Brand />
        </div>
        <div className="w-full flex justify-center h-[450px] shadow-lg rounded-lg shadow-fuchsia-500">
          <div className="hidden md:block">
            <img src={logDark} alt="signdark" className="h-full" />
          </div>
          <div className=" text-white lg:w-1/2 sm:w-3/4 px-5 flex flex-col gap-1 items-center justify-around">
            <h1 className="font-bold text-2xl text-cyan-400 my-2">Welcome!</h1>
            <UserForm isSignIn={isSignIn} />
            <div className="flex font-semibold items-center">
              <span className="">Already have account?</span>
              <button
                onClick={handleSign}
                className="text-sm text-cyan-400 px-5 py-1 rounded-full hover:underline"
              >
                {isSignIn ? "Sign Up" : "Sign In"}
              </button>
            </div>
            <h3 className="text-white  tracking-widest ">Or</h3>
            <GoogleSignIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
