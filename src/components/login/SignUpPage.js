import React, { useState } from "react";
import logDark from "../../images/logDark.png";
import UserForm from "./UserForm";
import Brand from "../Brand";
import GoogleSignIn from "./GoogleSignIn";
import ForgetPassForm from "./ForgetPassForm";

//
const SignUpPage = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const handleSign = () => {
    setIsSignIn(!isSignIn);
    setIsForgetPassword(false);
  };

  return (
    <div className="bg-slate-800 h-screen">
      <div className="w-[75%] lg:w-[65%] xl:w-[55%] max-w-4xl flex flex-col gap-10 items-center absolute  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="text-white h-[70px] max-md:h-16">
          <Brand />
        </div>
        <div className="w-full flex justify-center h-[450px] shadow-lg rounded-lg shadow-fuchsia-500">
          <div className="hidden md:block w-full">
            <img src={logDark} alt="signdark" className="h-full" />
          </div>
          <div className=" text-white w-full px-5 flex flex-col gap-1 items-center justify-around">
            <h1 className="font-bold text-2xl text-cyan-400 my-2">Welcome!</h1>
            {isForgetPassword ? (
              <ForgetPassForm />
            ) : (
              <UserForm isSignIn={isSignIn} />
            )}
            {isSignIn && (
              <div className="w-full self-start">
                <button className="text-cyan-500 cursor-pointer font-semibold">
                  {!isForgetPassword ? (
                    <span onClick={() => setIsForgetPassword(true)}>
                      Forget password ?
                    </span>
                  ) : (
                    <span
                      onClick={() => {
                        setIsSignIn(true);
                        setIsForgetPassword(false);
                      }}
                    >
                      Sign In
                    </span>
                  )}
                </button>
              </div>
            )}
            <div className="flex font-semibold items-center">
              <span>
                {isSignIn ? "Create a new one" : "Already have account"}?
              </span>
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
