import { apiSlice } from "@/src/api/apiSlice";

export const emailVerificationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEmailVerification: builder.query({
      query: (email) => {
        return `/user/check-email/${email}`;
      },
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetEmailVerificationQuery } = emailVerificationApi;
