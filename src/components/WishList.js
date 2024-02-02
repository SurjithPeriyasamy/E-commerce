import { useDispatch, useSelector } from "react-redux";
import useWishListItems from "../hooks/useWishListItems";
import { clearWishList, updateWishList } from "../utils/wishListSlice";
import { FaHeart } from "react-icons/fa6";
import { addCartItems } from "../utils/cartSlice";
import { FcOk } from "react-icons/fc";

const WishList = () => {
  const wishListArray = useWishListItems();
  const cartItems = useSelector((store) => store.cart.addedItems);
  const dispatch = useDispatch();

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
    dispatch(updateWishList({ [id]: { productDetail } }));
  };
  return (
    <div className="px-3 pb-7 space-y-5">
      <h1 className="text-xl flex items-center justify-center gap-2">
        My Wishlist <FaHeart className="text-red-600" /> ({wishListArray.length}{" "}
        items)
      </h1>
      {wishListArray.length && (
        <div className=" ml-auto w-fit">
          <button
            onClick={handleWishList}
            className="bg-slate-800 text-white px-3 py-[2px] rounded-md"
          >
            Clear All
          </button>
        </div>
      )}
      {wishListArray.length ? (
        wishListArray.map((item) => {
          const { thumbnail, brand, category, title, id, price } =
            item.productDetail;
          return (
            <div
              key={id}
              className="flex justify-center items-center gap-5 mx-auto w-11/12"
            >
              <img
                src={thumbnail}
                alt="item"
                className="basis-1/4 w-20 h-20 rounded-md border object-cover "
              />
              <div className="basis-1/2 justify-self-start">
                <h3 className="text-gray-600 text-xs">{brand}</h3>
                <h1>{title}</h1>
                <h4 className="text-gray-600 text-xs">Category : {category}</h4>
                <div
                  onClick={() => handleCart(id, item.productDetail, price)}
                  className="flex flex-col gap-1 mt-1 items-center text-sm"
                >
                  <button
                    disabled={cartItems[id]}
                    className="disabled:opacity-90 bg-slate-800 py-1 px-3 rounded-md text-white flex gap-2 items-center"
                  >
                    {cartItems[id] ? "Added in the cart " : "+Add to cart"}
                    {cartItems[id] && <FcOk />}
                  </button>

                  <button
                    className="text-red-700 font-semibold opacity-90"
                    onClick={() => handleClick(id, item.productDetail)}
                  >
                    Remove from wishlist
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h2 className="text-center">Please add some items</h2>
      )}
    </div>
  );
};
export default WishList;
