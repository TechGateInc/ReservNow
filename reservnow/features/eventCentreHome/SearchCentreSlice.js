import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchCentreApi = createApi({
  reducerPath: "searchCentreApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5500` }),
  endpoints: (builder) => ({
    getFilteredCentres: builder.mutation({
      query: ({ location, capacity }) => ({
        url: "/eventcentre/search/",
        method: "POST",
        body: { location, capacity },
      }),
    }),
  }),
});

export const { useGetFilteredCentresMutation } = searchCentreApi;
