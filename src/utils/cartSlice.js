import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    addedItems: {},
  },
  reducers: {
    addCartItems: (state, action) => {
      state.addedItems = { ...state.addedItems, ...action.payload };
    },
    updateQuantity: (state, action) => {
      const { quantity, id } = action.payload;
      const item = state.addedItems[id];

      const totalQuantity = item.quantity + quantity;
      item.quantity = totalQuantity;
      if (item.quantity < 1) {
        delete state.addedItems[id];
        return;
      }
      item.totalPrice = totalQuantity * item.productDetail.price;
    },
    removeItem: (state, action) => {
      delete state.addedItems[action.payload];
    },
    clearCart: (state) => {
      state.addedItems = {};
    },
  },
});

export const { addCartItems, updateQuantity, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
