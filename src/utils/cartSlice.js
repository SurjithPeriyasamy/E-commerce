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
      item.totalPrice = totalQuantity * item.productDetail.price;
      if (item.quantity < 1) {
        delete state.addedItems[id];
        return;
      }
    },
    removeItem: (state, action) => {
      delete state.addedItems[action.payload];
    },
  },
});

export const { addCartItems, updateQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
