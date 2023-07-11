import { apiSlice } from "@/api/apiSlice";

export const amenityCategorySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAmenityCategory: builder.query({
      query: () => {
        return `/amenitycategory`;
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetAmenityCategoryQuery } = amenityCategorySlice;
