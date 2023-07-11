import { apiSlice } from "@/api/apiSlice";

export const progressSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProgress: builder.query({
      query: () => {
        return "/progress";
      },
    }),
    createProgress: builder.mutation({
      query: ({
        name,
        address,
        capacity,
        price,
        description,
        city,
        state,
        venueOwner,
        amenities,
      }) => ({
        url: "/posting",
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
        },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetProgressQuery, useCreateProgressMutation } = progressSlice;
