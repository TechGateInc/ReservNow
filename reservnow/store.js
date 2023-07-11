import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "./features/auth/authSlice";
import { eventCentreApi } from './features/eventCentreHome/EventCentreSlice';
import { searchCentreApi } from './features/eventCentreHome/SearchCentreSlice';
import { reviewApi } from "./features/Details/reviewSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [reviewApi.reducerPath] : reviewApi.reducer,
    auth: authReducer,
    // detail: detailSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, reviewApi.middleware),
   
  devTools: true,
});
