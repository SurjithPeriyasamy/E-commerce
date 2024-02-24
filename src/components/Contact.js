import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/sideBarSlice";
import { closePopUp } from "../utils/userSlice";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";

const Contact = () => {
  const [me, setMe] = useState(null);

  const mailSubject = useRef(null);
  const mailBody = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
    dispatch(closeSideBar());
    dispatch(closePopUp());
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/surjithperiyasamy");
    const json = await data.json();
    setMe(json);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      `mailto:mahindhiran005@gmail.com?subject=${mailSubject.current.value}&body=${mailBody}`,
      "_blank",
      "rel=noopener noreferrer"
    );
    mailSubject.current.value = "";
    mailBody.current.value = "";
  };
  return (
    <div className="md:w-[800px] imp max-md:max-w-[50%] bg-slate-700 shadow-2xl  dark:bg-transparent p-3 rounded-lg max-md:mt-20 max-md:py-10 flex max-md:items-center gap-10 max-md:flex-col  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="space-y-5 xl:w-1/2 w-full self-center">
        <img
          src={me?.avatar_url}
          alt="me"
          className="rounded-3xl size-[80%] mx-auto"
        />
        <div className="flex text-white justify-evenly">
          <Link
            className="hover:text-cyan-500"
            to="https://www.linkedin.com/in/surjith-p-dev005"
            target="_blank"
          >
            <FaLinkedin size={35} />
          </Link>
          <Link
            className="hover:text-cyan-500"
            to="https://wa.me/919003393417"
            target="_blank"
          >
            <BsWhatsapp size={35} />
          </Link>
        </div>
      </div>
      <div className="xl:w-1/2 md:space-y-10 space-y-5 w-full">
        <h3 className="text-white dark:text-gray-500 md:text-3xl text-2xl">
          Contact US
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col h-full w-full gap-7 *:rounded-xl *:py-[6px] *:px-3  *:outline-none"
        >
          <input
            ref={mailSubject}
            type="text"
            placeholder="Subject"
            className="w-full"
          />
          <textarea
            type="text"
            ref={mailBody}
            rows={6}
            placeholder="Message..."
            className="w-full"
          />
          <button className="flex gap-2 mx-auto items-center justify-center w-1/2 text-lg tracking-wider shadow-md shadow-fuchsia-500 text-white hover:translate-y-1 hover:shadow-none duration-200">
            Send <IoMailSharp />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
