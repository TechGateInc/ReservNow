import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const detailSlice = createApi({
  reducerPath: "detailSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getDetails: builder.query({
      query: (id) => {
       console.log(id);
        return `/eventcentre/${id}`;
      },
    }),
  }),
});

export const { useGetDetailsQuery } = detailSlice;
