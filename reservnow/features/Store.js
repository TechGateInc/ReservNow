"use client";
import { configureStore } from "@reduxjs/toolkit";
import { detailSlice } from "./Event Centre Details/DetailSlice";
import { ReviewSlice } from "./Review data/ReviewSlice";
export const store = configureStore({
  reducer: {
    [detailSlice.reducerPath]: detailSlice.reducer,
    [ReviewSlice.reducerPath]: ReviewSlice.reducer,
    // ReviewSlice: ReviewSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(detailSlice.middleware)
      .concat(ReviewSlice.middleware),
});

export const RootState = store.getState();
export const AppDispatch = store.dispatch;
