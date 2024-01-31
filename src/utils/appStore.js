import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import sideBarReducer from "./sideBarSlice";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import searchReducer from "./searchSlice";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    theme: themeReducer,
    sideBar: sideBarReducer,
    user: userReducer,
    products: productReducer,
    search: searchReducer,
    cart: cartReducer,
  },
});

export default appStore;
