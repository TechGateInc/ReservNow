import { apiSlice } from "@/src/api/apiSlice";

export const bookingSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooking: builder.query({
      query: () => {
        return "/booking";
      },
    }),
    createBooking: builder.mutation({
      query: ({
        start_date,
        end_date,
        notes,
        event_centre_id,
        userId,
        duration,
      }) => ({
        url: "/booking",
        method: "POST",
        body: {
          start_date,
          end_date,
          notes,
          event_centre_id,
          userId,
          duration,
        },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetBookingQuery, useCreateBookingMutation } = bookingSlice;
