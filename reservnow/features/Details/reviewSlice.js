import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { apiSlice } from "@/api/apiSlice";

export const reviewApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCentres: builder.query({
            query : ({id}) => "/review/"
        })
    })

}) ;

export const { useGetReviewQuery } = reviewApi;