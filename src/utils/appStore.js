import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import sideBarReducer from "./sideBarSlice";
import userReducer from "./userSlice";
import productSlice from "./productSlice";
import searchSlice from "./searchSlice";

const appStore = configureStore({
  reducer: {
    theme: themeReducer,
    sideBar: sideBarReducer,
    user: userReducer,
    products: productSlice,
    search: searchSlice,
  },
});

export default appStore;
