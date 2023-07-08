import { apiSlice } from "../../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/user/signin",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;

export const emailVerificationApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getEmailVerification: build.query({
      query: (email) => ({ url: `/user/check-email/${email}` }),
      keepUnusedDataFor: 60,
    }),
  }),
});

export const { useGetEmailVerificationQuery } = emailVerificationApiSlice;
