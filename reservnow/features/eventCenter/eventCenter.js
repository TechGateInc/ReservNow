import { apislice } from " . . / .. /app/api/apislice";

export const eventCentersApiSlice = apislice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ("/eventcentre" ? keepUnusedDataFor : 5),
    }),
  }),
});

export const { useGetEventCentersQuery } = eventCentersApiSlice;
