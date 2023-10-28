import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { setTokens, logOut } from "./features/auth/authSlice";
import { RootState } from "./store";
import config from "./config";
import Cookies from "js-cookie";
import { refreshTokenRequest } from "./features/refresh/refresh";

const baseQuery = fetchBaseQuery({
  baseUrl: config.baseURL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    const refreshToken = Cookies.get("refreshToken"); // Get the refresh token from a cookie
    if (refreshToken) {
      // Send a request to your server to refresh the tokens using the refresh token
      const refreshResult = await refreshTokenRequest(refreshToken);
      if (refreshResult && refreshResult.data) {
        const user = (api.getState() as RootState).auth.user;
        const { accessToken, refreshToken } = refreshResult.data;
        api.dispatch(setTokens({ user, accessToken, refreshToken }));

        // Update the tokens in cookies
        Cookies.set("accessToken", accessToken);
        Cookies.set("refreshToken", refreshToken);

        // Retry the original query with the new access token
        result = await baseQuery(args, api, extraOptions);
      } else {
        // Handle token refresh failure
        api.dispatch(logOut());

        // Clear the tokens in cookies
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
      }
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
