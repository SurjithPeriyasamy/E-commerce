import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import sideBarReducer from "./sideBarSlice";

const appStore = configureStore({
  reducer: {
    theme: themeReducer,
    sideBar: sideBarReducer,
  },
});

export default appStore;
