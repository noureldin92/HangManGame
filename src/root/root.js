import { configureStore } from "@reduxjs/toolkit";
import gameOverSlice from "./gameOverSlice";
import mainWordSlice from "./mainWordSlice";
const store = configureStore({
  reducer: {
    mainWordSlice: mainWordSlice,
    gameOverSlice: gameOverSlice,
  },
});

export default store;
