import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const DataApi = createApi({
    reducerPath:'DataApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://data.covid19india.org/',
    }),
    endpoints:(builder)=>({
        getAllData:builder.query({
            query:()=>({
                url:'data.json',
                method:'GET'
            })
        })
    })
})


export const { useGetAllDataQuery } = DataApi;