import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { closeSearch } from "../utils/searchSlice";
import { IoMdHeartEmpty, IoMdStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { addCartItems, updateQuantity } from "../utils/cartSlice";
import { FcOk } from "react-icons/fc";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState(null);
  const [currIndex, setCurrIndex] = useState(0);
  const [success, setSuccess] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const addedItems = useSelector((store) => store.cart.addedItems);

  const { productId } = useParams();
  useEffect(() => {
    dispatch(closeSearch());
    getData();
  }, [productId]);
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

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleReduceQuantity = () => {
    setQuantity(quantity >= 1 ? quantity - 1 : 1);
  };
  const handleCartItems = () => {
    addedItems[title]
      ? dispatch(updateQuantity({ title, quantity }))
      : dispatch(
          addCartItems({
            [title]: {
              productDetail,
              quantity,
              totalPrice: quantity * price,
            },
          })
        );
    setQuantity(1);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };
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
              <button onClick={handleReduceQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={handleAddQuantity}>+</button>
            </div>
          </div>
          <button
            onClick={handleCartItems}
            disabled={success}
            className="bg-[#1D232A] disabled:bg-opacity-50 px-5 py-1 text-white dark:text-cyan-500 rounded-xl"
          >
            + Add to cart
          </button>
        </div>

        <p
          className={
            (success ? "opacity-100" : "opacity-0 translate-y-5") +
            " duration-500 text-green-600 flex gap-1 items-center justify-center font-semibold"
          }
        >
          Your items added to the cart <FcOk />
        </p>
      </div>
    </div>
  );
};
export default ProductDetail;
