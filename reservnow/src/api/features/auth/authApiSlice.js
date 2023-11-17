import { apiSlice } from "../../apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/user/signin",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    createUser: builder.mutation({
      query: ({ name, email, password, phoneNo }) => {
        return {
          url: `/user/signup`,
          method: "POST",
          body: {
            name,
            email,
            password,
            phoneNo,
          },
        };
      },
    }),
    getUserEmail: builder.mutation({
      query: ({ email }) => {
        return {
          url: `/user/check-email`,
          method: "POST",
          body: {
            email,
          },
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useLoginMutation,
  useCreateUserMutation,
  useGetUserEmailMutation,
} = authApiSlice;
