import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: {
    showWishList: false,
    wishListItems: {},
  },
  reducers: {
    showWishList: (state) => {
      state.showWishList = true;
    },
    closeWishList: (state) => {
      state.showWishList = false;
    },
    updateWishList: (state, action) => {
      const key = Object.keys(action.payload);
      if (state.wishListItems[key[0]]) delete state.wishListItems[key[0]];
      else state.wishListItems = { ...state.wishListItems, ...action.payload };
    },
    clearWishList: (state) => {
      state.wishListItems = {};
    },
  },
});

export const { updateWishList, showWishList, closeWishList, clearWishList } =
  wishListSlice.actions;
export default wishListSlice.reducer;
