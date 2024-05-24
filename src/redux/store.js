import { configureStore } from '@reduxjs/toolkit'
import contentReducer from '../features/content/contentData'
export const store = configureStore({
  reducer: {
    content : contentReducer,
  },
})