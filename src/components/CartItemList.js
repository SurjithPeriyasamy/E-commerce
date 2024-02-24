import { Link } from "react-router-dom";
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../utils/cartSlice";

const CartItemList = ({ item }) => {
  const dispatch = useDispatch();
  const { title, thumbnail, category, price, id } = item.productDetail;
  const handleAddQuantity = () => {
    dispatch(updateQuantity({ id, quantity: 1 }));
  };
  const handleReduceQuantity = () => {
    dispatch(updateQuantity({ id, quantity: -1 }));
  };
  const handleRemove = () => {
    dispatch(removeItem(id));
  };
  return (
    <div
      key={id}
      className="flex justify-around lg:justify-between items-center py-2 *:flex *:flex-col *:items-center"
    >
      <div className="gap-1 ">
        <Link to={`/products/${id}`} className="h-16 w-24">
          <img
            src={thumbnail}
            alt="item"
            className="h-full w-full rounded-md"
          />
        </Link>
        <Link
          to={`/products/${id}`}
          className="w-3/4 truncate text-center font-semibold block text-sm"
        >
          {title}
        </Link>
        <Link
          to={`/products/category/${category}`}
          className="text-gray-600 dark:text-gray-400 text-xs "
        >
          Category : {category}
        </Link>
      </div>
      <div className="gap-2 ">
        <div className="font-semibold text-sm dark:text-gray-400">
          Price: ${price}
        </div>
        <div className="flex gap-3 items-center *:text-white *:bg-red-500 *:dark:bg-cyan-600 *:text-xl *:font-extrabold *:px-4 *:rounded-md py-1">
          <button onClick={handleReduceQuantity}>-</button>
          {item.quantity}
          <button onClick={handleAddQuantity}>+</button>
        </div>
        <div className="dark:text-gray-400 text-sm">
          Total price:{" "}
          <span className="dark:text-white font-semibold">
            ${item.totalPrice}
          </span>
        </div>
        <button onClick={handleRemove}>
          <MdDeleteSweep
            size={25}
            className="text-red-600 dark:text-cyan-500"
          />
        </button>
      </div>
    </div>
  );
};
export default CartItemList;
