import { configureStore } from "@reduxjs/toolkit";
import { chatSlices } from "../slices/chatSlices";

const store = configureStore({
  reducer: {
    chat: chatSlices,
  },
});

export default store;
