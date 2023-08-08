import { apiSlice } from "@/api/apiSlice";

export const emailVerificationApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
      getEmailVerification: build.mutation({
        query: (email) => ({ url: `/user/check-email/${email}` }),
        keepUnusedDataFor: 5,
      }),
    }),
  });
  
  export const { useGetEmailVerificationMutation } = emailVerificationApiSlice;
  