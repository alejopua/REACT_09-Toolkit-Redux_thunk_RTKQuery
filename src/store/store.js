import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slicer/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
