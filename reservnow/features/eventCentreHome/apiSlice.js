import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchCentreApi = createApi({
  reducerPath: "searchCentreApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5500" }),
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

// export const { useGetFilteredCentresMutation } = searchCentreApi;

export const eventCentreApi = createApi({
  reducerPath: "eventCentreApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5500" }),
  endpoints: (builder) => ({
    getAllCentres: builder.query({
      query: () => "/eventcentre/",
    }),
  }),
});

// export const { useGetAllCentresQuery } = eventCentreApi;

const apiSlice = createSlice({
  name: "api",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) =>
        action.type.startsWith("searchCentreApi/") ||
        action.type.startsWith("eventCentreApi/"),
      (state, action) => {
        // Delegate to the respective API reducers
        searchCentreApi.reducer(state, action);
        eventCentreApi.reducer(state, action);
      }
    );
  },
});

export const { reducer: apiReducer } = apiSlice;
export const { useGetFilteredCentresMutation, useGetAllCentresQuery } =
  searchCentreApi;

export default apiSlice.reducer;
