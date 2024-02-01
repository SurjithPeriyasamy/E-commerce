import useCartItems from "../hooks/useCartItems";
import CartItemList from "./CartItemList";

const Cart = () => {
  const { totalCartItems, cartItemsArray } = useCartItems();

  return (
    <div className="mt-40 dark:text-white">
      {totalCartItems ? (
        <div className="max-w-6xl mx-auto ">
          <h1 className="mx-auto w-fit text-xl  font-semibold my-5">
            Your Cart ({totalCartItems} Items)
          </h1>
          <div className="space-y-6">
            <div className=" grid grid-cols-5 border-b-2 justify-items-center place-items-center py-2">
              <h1>Item</h1>
              <h1>Price</h1>
              <h1>Quantity</h1>
              <h1>Total</h1>
              <h1>Remove</h1>
            </div>
            {cartItemsArray.map((item) => (
              <CartItemList key={item.productDetail.id} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-xl mx-auto w-fit">
          Your Cart is Empty Please Add Items
        </div>
      )}
    </div>
  );
};
export default Cart;
