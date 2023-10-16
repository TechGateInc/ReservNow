import { apiSlice } from "../../api/apiSlice";

export const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => {
        return `/user/${id}`;
      },
    }),
  }),
});

export const { useGetUserQuery } = userSlice;
