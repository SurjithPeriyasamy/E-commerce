import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import sideBarReducer from "./sideBarSlice";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import searchReducer from "./searchSlice";
import cartReducer from "./cartSlice";
import wishListReducer from "./wishListSlice";
import customerReducer from "./customerSlice";

const appStore = configureStore({
  reducer: {
    theme: themeReducer,
    sideBar: sideBarReducer,
    user: userReducer,
    products: productReducer,
    search: searchReducer,
    cart: cartReducer,
    wishlist: wishListReducer,
    customer: customerReducer,
  },
});

export default appStore;
