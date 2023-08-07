import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "@/api/apiSlice";

export const searchCentreApi = apiSlice.injectEndpoints({
  reducerPath: "searchCentreApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5500` }),
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
