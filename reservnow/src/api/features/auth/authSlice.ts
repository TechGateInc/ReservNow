import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import { RootState } from "../../store";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, accessToken: null, refreshToken: null },
  reducers: {
    setTokens: (state, action) => {
      const { user, accessToken, refreshToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;

      // Store the tokens as cookies
      Cookies.set("accessToken", accessToken);
      Cookies.set("refreshToken", refreshToken);
    },
    logOut: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;

      // Clear the tokens from cookies on logout
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
    },
  },
});

export const { setTokens, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectCurrentToken = (state: RootState) => state.auth.accessToken