import { apiSlice } from "../../api/apiSlice";

export const registrationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/user/signup",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useRegistrationMutation } = registrationApiSlice;
