import { apiSlice } from "@/api/apiSlice";

export const reviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReview: builder.query({
      query: (id) => {
        return `/review/${id}`;
      },
    }),
  }),
});

export const { useGetReviewQuery } = reviewApi;
