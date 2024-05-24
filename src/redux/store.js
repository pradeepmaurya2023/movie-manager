import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../features/content/contentData";
import loaderReducer from "../features/loader/loaderData";
export const store = configureStore({
  reducer: {
    content: contentReducer,
    loader: loaderReducer,
  },
});
