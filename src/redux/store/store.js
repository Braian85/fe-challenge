import { configureStore } from "@reduxjs/toolkit";
import { postSlices } from "../slices/postSlices";

const store = configureStore({
  reducer: {
    post: postSlices,
  },
});

export default store;
