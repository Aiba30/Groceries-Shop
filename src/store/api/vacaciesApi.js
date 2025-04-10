import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vacanciesApi = createApi({
  reducerPath: "vacanciesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => "/jobs",
    }),
  }),
});

export const { useGetJobsQuery } = vacanciesApi;
