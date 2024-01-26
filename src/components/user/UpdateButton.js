import React from "react";
import { MdOutlineUpdate } from "react-icons/md";

const UpdateButton = ({ handleUpdate, loading }) => {
  return loading ? (
    <span>
      <MdOutlineUpdate className="text-3xl text-black animate-spin " />
    </span>
  ) : (
    <button
      onClick={handleUpdate}
      className=" text-black font-semibold shadow-lg px-2 py-1 bg-gradient-to-br from-emerald-700 to-emerald-400 rounded-lg "
    >
      Update
    </button>
  );
};

export default UpdateButton;
