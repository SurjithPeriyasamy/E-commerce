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
      className="grid grid-cols-5 border-b-2 justify-items-center place-items-center py-2"
    >
      <div className="flex gap-2 max-md:flex-col ml-7">
        <Link to={`/products/${id}`} className="h-16 w-24">
          <img
            src={thumbnail}
            alt="item"
            className="h-full w-full object-contain rounded-md"
          />
        </Link>
        <div>
          <Link to={`/products/${id}`} className="font-semibold block">
            {title}
          </Link>
          <Link
            to={`/products/category/${category}`}
            className="text-gray-600 dark:text-gray-400 text-sm "
          >
            Category : {category}
          </Link>
        </div>
      </div>
      <div>$ {price}</div>
      <div className="flex gap-3 items-center border border-black dark:border-white rounded-md py-1 px-3">
        <button onClick={handleReduceQuantity} className="text-lg">
          -
        </button>
        {item.quantity}
        <button onClick={handleAddQuantity} className="text-lg">
          +
        </button>
      </div>
      <div>$ {item.totalPrice}</div>
      <button onClick={handleRemove}>
        <MdDeleteSweep size={25} className="text-red-600 dark:text-cyan-500" />
      </button>
    </div>
  );
};
export default CartItemList;
