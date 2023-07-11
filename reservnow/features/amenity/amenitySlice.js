import { apiSlice } from "@/api/apiSlice";

export const amenitySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAmenity: builder.query({
      query: () => {
        return "/amenity";
      },
    }),
  }),
});

export const { useGetAmenityQuery } = amenitySlice;
