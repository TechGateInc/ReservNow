import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { apiSlice } from "@/api/apiSlice";

export const eventCentreApi = apiSlice.injectEndpoints({
    reducerPath:"eventCentreApi",
    baseQuery: fetchBaseQuery({baseUrl : "http://localhost:5500"}),
    endpoints: (builder) => ({
        getAllCentres: builder.query({
            query : () => "/eventcentre/"
        })
    })

}) ;

export const { useGetAllCentresQuery } = eventCentreApi