import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { closeSearch } from "../utils/searchSlice";
import { IoMdHeartEmpty, IoMdStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState(null);
  const [currIndex, setCurrIndex] = useState(0);
  const dispatch = useDispatch();
  const { productId } = useParams();
  useEffect(() => {
    dispatch(closeSearch());
    getData();
  }, []);
  const getData = async () => {
    const data = await fetch(`https://dummyjson.com/products/${productId}`);
    const json = await data.json();
    setProductDetail(json);
  };
  if (!productDetail) return null;
  const {
    images,
    title,
    description,
    rating,
    brand,
    price,
    discountPercentage,
  } = productDetail;

  const handleAddQuantity = () => {};
  const handleReduceQuantity = () => {};
  return (
    <div className="max-w-5xl p-5 shadow-xl rounded-lg mx-auto mt-36 h-[500px] flex justify-center">
      <div className="w-3/5 flex flex-col justify-between ">
        <img
          src={images[currIndex]}
          alt="products"
          className="h-3/4 w-full p-5 object-contain "
        />

        <div className="flex justify-around w-full">
          {images.map((image, index) => (
            <div
              onClick={() => setCurrIndex(index)}
              key={index}
              className={`${
                currIndex === index ? "opacity-100" : "opacity-50"
              } max-h-28 max-w-28 border p-1 cursor-pointer duration-500`}
            >
              <img src={image} alt="diff" className="h-full w-full" />
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/5 space-y-5 ">
        <h3 className="text-gray-500 font-semibold tracking-wider">{brand}</h3>
        <h1 className="font-semibold tracking-wider text-4xl">{title}</h1>

        <p className="tracking-wide">{description}</p>
        <h5 className="flex items-center p-1 px-3 font-semibold text-sm shadow-lg w-fit rounded-lg">
          <IoMdStar size={20} className="text-green-700 " />
          {rating}
        </h5>
        <div className="flex justify-between items-center px-2">
          <div>
            ${price}{" "}
            <span className="text-gray-500 line-through">
              ${(price / (1 - discountPercentage / 100)).toFixed(2)}
            </span>
          </div>
          <div className="rounded-2xl text-sm border px-2 py-1">
            {discountPercentage}% off
          </div>
        </div>
        <button className="flex justify-center mx-auto border py-1 px-4 rounded-lg items-center gap-3">
          Wishlist
          <span className="rounded-full  p-2 border border-gray-300 ">
            <IoMdHeartEmpty />
          </span>
        </button>
        <div className="flex max-w-[90%] justify-between mx-auto">
          <div className="flex border gap-5 w-fit py-1 px-3">
            <span>Quantity</span>{" "}
            <div className="flex gap-5">
              <button onClick={handleAddQuantity}>-</button>
              <span>0</span>
              <button onClick={handleReduceQuantity}>+</button>
            </div>
          </div>
          <button className="bg-[#1D232A] px-5 py-1 text-white rounded-xl">
            + Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
