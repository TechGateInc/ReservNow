import { apiSlice } from "@/src/api/apiSlice";

export const reviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReview: builder.query({
      query: (id) => {
        return `/review/eventCentre/${id}`;
      },
    }),
  }),
});

export const { useGetReviewQuery } = reviewApi;
