import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const eventCentreApi = createApi({
    reducerPath:"eventCentreApi",
    baseQuery: fetchBaseQuery({baseUrl : "http://localhost:5500"}),
    endpoints: (builder) => ({
        getAllCentres: builder.query({
            query : () => "/eventcentre/"
        })
    })

}) ;

export const { useGetAllCentresQuery } = eventCentreApi