import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5500",
  credentials: "include",
});

export const registrationApiSlice = createApi({
  reducerPath: "registrationApi",
  baseQuery,
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/user/signup",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = registrationApiSlice;

export default registrationApiSlice.reducer;
