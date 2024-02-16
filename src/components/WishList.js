import { useDispatch, useSelector } from "react-redux";
import useWishListItems from "../hooks/useWishListItems";
import {
  clearWishList,
  closeWishList,
  updateWishList,
} from "../utils/wishListSlice";
import { FaHeart } from "react-icons/fa6";
import { addCartItems } from "../utils/cartSlice";
import { FcOk } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
const WishList = () => {
  const [removeId, setRemoveId] = useState(null);
  const wishListArray = useWishListItems();
  const cartItems = useSelector((store) => store.cart.addedItems);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeWishList());
  };
  const handleWishList = () => {
    dispatch(clearWishList());
  };

  const handleCart = (id, productDetail, price) => {
    dispatch(
      addCartItems({
        [id]: { productDetail, quantity: 1, totalPrice: 1 * price },
      })
    );
  };
  const handleClick = (id, productDetail) => {
    setRemoveId(id);
    setTimeout(
      () => (
        dispatch(updateWishList({ [id]: { productDetail } })), setRemoveId(null)
      ),
      300
    );
  };
  return (
    <div className="px-3 pb-5">
      <IoClose
        onClick={handleClose}
        size={25}
        className="text-black m-5 cursor-pointer"
      />
      <h1 className="text-xl flex items-center justify-center gap-2">
        My Wishlist <FaHeart className="text-red-600" /> ({wishListArray.length}
        items)
      </h1>

      {wishListArray.length ? (
        <>
          <div className=" ml-auto w-fit">
            <button
              onClick={handleWishList}
              className="bg-slate-800 text-white px-3 py-[2px] rounded-md"
            >
              Clear All
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {wishListArray.map((item) => {
              const { thumbnail, brand, category, title, id, price } =
                item.productDetail;
              return (
                <div
                  key={id}
                  className={
                    (removeId === id && "translate-x-full") +
                    " duration-300 transition-transform flex justify-center items-center gap-5 mx-auto w-11/12"
                  }
                >
                  <img
                    src={thumbnail}
                    alt="item"
                    className="basis-1/4 w-20 h-20 rounded-md border object-cover "
                  />
                  <div className="basis-1/2 justify-self-start">
                    <h3 className="text-gray-600 text-xs font-semibold">
                      {brand}
                    </h3>
                    <h1 className="capitalize tracking-wider">{title}</h1>
                    <h4 className="text-gray-600 text-xs font-semibold">
                      Category : {category}
                    </h4>
                    <div className="flex gap-2 mt-1 items-center text-sm">
                      <button
                        onClick={() =>
                          handleCart(id, item.productDetail, price)
                        }
                        disabled={cartItems[id]}
                        className="disabled:opacity-90 bg-slate-800 py-1 px-3 rounded-md text-white flex gap-2 items-center"
                      >
                        {cartItems[id] ? "Added to the cart " : "+Add to cart"}
                        {cartItems[id] && <FcOk />}
                      </button>

                      <button
                        className="text-red-700 font-semibold opacity-90"
                        onClick={() => handleClick(id, item.productDetail)}
                      >
                        <MdDelete size={22} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <h2 className="text-center">Please add some items</h2>
      )}
    </div>
  );
};
export default WishList;
