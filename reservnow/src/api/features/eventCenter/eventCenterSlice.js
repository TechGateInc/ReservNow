import { apiSlice } from "@/src/api/apiSlice";

export const eventCentresApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEventCentre: builder.query({
      query: (id) => {
        // console.log(id);
        return `/eventcentre/${id}`;
        
      },
    }),
    getAllEventCentres: builder.query({
      query: () => "/eventcentre/",
    }),
  }),
  overrideExisting: true,
});

export const { useGetEventCentreQuery, useGetAllEventCentresQuery } =
  eventCentresApiSlice;
