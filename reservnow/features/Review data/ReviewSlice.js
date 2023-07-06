import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const ReviewSlice = createApi({
  reducerPath: "ReviewSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getReview: builder.query({
      query: () => {
        return "/user";
      },
    }),
  }),
});

export const { useGetReviewQuery } = ReviewSlice;
