import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/sideBarSlice";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { CAROUSEL_IMAGES } from "../utils/constants";
import { Zoom } from "react-awesome-reveal";

const Carousel = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSideBar());
    const autoPlay = setInterval(handleNext, 1800);

    return () => clearInterval(autoPlay);
  }, []);

  const handleNext = () => {
    setCurrIndex((prev) =>
      prev === CAROUSEL_IMAGES.length - 1 ? 0 : prev + 1
    );
  };
  const handlePrevious = () => {
    setCurrIndex((prev) =>
      prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1
    );
  };

  return (
    <div className="select-none mx-auto lg:rounded-xl lg:w-[90%] max-h-[700px] overflow-hidden relative">
      <div
        className="flex duration-300 "
        style={{ transform: `translateX(-${currIndex * 100}%)` }}
      >
        {CAROUSEL_IMAGES.map((image) => (
          <div key={image.id} className="shrink-0 relative w-full">
            <img
              rel="preload"
              src={image.url}
              alt="land"
              loading="eager"
              fetchpriority="high"
            />
            <div className="font-sans max-md:hidden top-1/4 w-1/2 left-1/2 -translate-x-1/2 max-w-[50%] absolute text-center text-gray-300 text-4xl tracking-wider italic flex flex-col">
              <Zoom
                delay={800}
                duration={1000}
                className="first-letter:text-7xl"
              >
                {image.slogan}
              </Zoom>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 z-30 px-2 group flex justify-between items-center w-full  *:max-sm:bg-white *:max-sm:bg-opacity-30  *:max-sm:scale-75 *:cursor-pointer *:h-20 *:px-2 *:py-3">
        <FaChevronLeft
          onClick={handlePrevious}
          size={35}
          className="group-hover:bg-white duration-300 group-hover:bg-opacity-30"
        />
        <FaChevronRight
          onClick={handleNext}
          size={35}
          className="group-hover:bg-white duration-300 group-hover:bg-opacity-30"
        />
      </div>
      <div className="absolute flex text-white py-5 inset-0 items-end justify-center w-full">
        {CAROUSEL_IMAGES.map((image, i) => (
          <GoDotFill
            key={image.id}
            size={20}
            className={`${currIndex === i ? "opacity-100" : "opacity-50"}`}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;
