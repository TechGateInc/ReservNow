import { apiSlice } from "@/src/api/apiSlice";

export const searchCentreApi = apiSlice.injectEndpoints({
  reducerPath: "searchCentreApi",
  endpoints: (builder) => ({
    getFilteredCentres: builder.mutation({
      query: ({ location, capacity, ctype }) => ({
        url: "/eventcentre/search/",
        method: "POST",
        body: { location, capacity, ctype },
      }),
    }),
  }),
});

export const { useGetFilteredCentresMutation } = searchCentreApi;
