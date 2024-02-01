import React from "react";
import { MdOutlineUpdate } from "react-icons/md";

const UpdateButton = ({ handleUpdate, loading }) => {
  return loading ? (
    <span>
      <MdOutlineUpdate className="text-2xl text-black animate-spin dark:text-white" />
    </span>
  ) : (
    <button
      onClick={handleUpdate}
      className=" text-black text-sm font-semibold shadow-lg px-2 py-1 dark:text-cyan-400 dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-700 bg-gradient-to-br from-emerald-700 to-emerald-400 rounded-lg "
    >
      Update
    </button>
  );
};

export default UpdateButton;
