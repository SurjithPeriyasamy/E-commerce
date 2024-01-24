import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import sideBarReducer from "./sideBarSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    theme: themeReducer,
    sideBar: sideBarReducer,
    user: userReducer,
  },
});

export default appStore;
