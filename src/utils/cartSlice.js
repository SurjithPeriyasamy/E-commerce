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
      const { quantity, title } = action.payload;
      const item = state.addedItems[title];
      if (item.quantity <= 1) {
        delete state.addedItems[title];
        return;
      }

      const totalQuantity = item.quantity + quantity;
      item.quantity = totalQuantity;
      item.totalPrice = totalQuantity * item.productDetail.price;
    },
    removeItem: (state, action) => {
      delete state.addedItems[action.payload];
    },
  },
});

export const { addCartItems, updateQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
