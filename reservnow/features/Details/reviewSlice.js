import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { apiSlice } from "@/api/apiSlice";

export const reviewApi = apiSlice.injectEndpoints({
    reducerPath:"reviewApi",
    baseQuery: fetchBaseQuery({baseUrl : "http://localhost:5500"}),
    endpoints: (builder) => ({
        getAllCentres: builder.query({
            query : ({id}) => "/review/"
        })
    })

}) ;

export const { useGetReviewQuery } = reviewApi;