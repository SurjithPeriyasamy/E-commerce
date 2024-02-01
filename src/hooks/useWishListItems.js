import { useSelector } from "react-redux";

const useWishListItems = () => {
  const wishListItems = useSelector((store) => store.wishlist.wishListItems);
  const wishListArray = [];
  for (const key in wishListItems) {
    wishListArray.push(wishListItems[key]);
  }
  return wishListArray;
};
export default useWishListItems;
