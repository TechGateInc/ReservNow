import { apiSlice } from "@/src/api/apiSlice";

export const centreTypeSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCentreType: builder.query({
      query: () => {
        return "/centretype";
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetCentreTypeQuery } = centreTypeSlice;
