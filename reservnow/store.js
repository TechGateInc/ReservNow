import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/auth/authSlice";
import persistConfig from "./features/auth/persistConfig";
import { authApiSlice } from "./features/auth/authApiSlice";
import { registrationApiSlice } from "./features/registration/registrationSlice";
import { emailVerificationApiSlice } from "./features/email verification/emailVerify";

const rootReducer = combineReducers({
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  [emailVerificationApiSlice.reducerPath]: emailVerificationApiSlice.reducer,
  [registrationApiSlice.reducerPath]: registrationApiSlice.reducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(
  {
    ...persistConfig,
    storage, // Specify the storage engine
  },
  rootReducer
);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApiSlice.middleware)
      .concat(emailVerificationApiSlice.middleware)
      .concat(registrationApiSlice.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;
