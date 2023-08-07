import { apiSlice } from "@/api/apiSlice";

export const eventCentresApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getEventCentres: build.query({
      query: () => ({ url: "/eventcentre" }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetEventCentresQuery } = eventCentresApiSlice;
