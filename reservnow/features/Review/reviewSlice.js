import { apiSlice } from "@/api/apiSlice";

export const reviewSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReview: builder.query({
      query: (id) => {
        return `/review/eventcentre/${id}`;
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetReviewQuery } = reviewSlice;
