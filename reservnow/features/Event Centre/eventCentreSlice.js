import { apiSlice } from "@/api/apiSlice";

export const eventCentreSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEventCentre: builder.query({
      query: (id) => {
        return `/eventcentre/${id}`;
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetEventCentreQuery } = eventCentreSlice;
