import { apiSlice } from "@/api/apiSlice";

export const progressSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProgress: builder.query({
      query: (id) => {
        return `/progress/venueOwner/${id}`;
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
        url: "/progress",
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
    updateProgress: builder.mutation({
      query: (params) => {
        return {
          url: `/progress/${params.progressId}`,
          method: "PUT",
          body: {
            name: params.name,
            address: params.address,
            capacity: params.capacity,
            price: params.price,
            description: params.description,
            city: params.city,
            state: params.state,
            venueOwner: params.venueOwner,
            amenities: params.amenities,
          },
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetProgressQuery,
  useCreateProgressMutation,
  useUpdateProgressMutation,
} = progressSlice;
