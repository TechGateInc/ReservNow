import { apiSlice } from "@/api/apiSlice";

export const eventCentreSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEventCentre: builder.query({
      query: (id) => {
        return `/eventcentre/${id}`;
      },
    }),
    getAllCentres: builder.query({
      query: () => "/eventcentre",
    }),
    createEventCentre: builder.mutation({
      query: ({
        name,
        address,
        capacity,
        price,
        description,
        city,
        state,
        venueOwner,
        descriptionPicker,
        centreType,
        amenities,
      }) => ({
        url: "/eventcentre",
        method: "POST",
        body: {
          name,
          address,
          capacity,
          price,
          description,
          city,
          state,
          venueOwner,
          amenities,
          descriptionPicker,
          centreType,
        },
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetEventCentreQuery,
  useGetAllCentresQuery,
  useCreateEventCentreMutation,
} = eventCentreSlice;
