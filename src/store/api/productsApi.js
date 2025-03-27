import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ categoryId, page, perPage }) =>
        categoryId
          ? `/products?categoryId=${categoryId}&_page=${page}&_per_page=${perPage}`
          : `/products?_page=${page}&_per_page=${perPage}`,
      transformResponse: (response) => response.data,
    }),
    getSaleProducts: builder.query({
      query: ({ page = 1, perPage }) =>
        `/products?isOnSale=true&_page=${page}&_per_page=${perPage}`,
      transformResponse: (response) => response.data,
    }),

    getNewProducts: builder.query({
      query: ({ page = 1, perPage }) =>
        `/products?isNew=true&_page=${page}&_per_page=${perPage}`,
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetNewProductsQuery,
  useGetSaleProductsQuery,
} = productsApi;
