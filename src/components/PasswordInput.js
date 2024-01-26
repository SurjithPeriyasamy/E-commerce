import React, { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const PasswordInput = ({ password }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
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
        {!showPassword ? <IoIosEye /> : <IoIosEyeOff />}
      </span>
    </div>
  );
};

export default PasswordInput;
