import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ categoryId, page, perPage, minPrice, maxPrice }) => {
        let url = `/products?_page=${page}&_per_page=${perPage}`;
        if (categoryId) url += `&categoryId=${categoryId}`;
        if (minPrice !== undefined) url += `&price_gte=${minPrice}`;
        if (maxPrice !== undefined) url += `&price_lte=${maxPrice}`;
        return url;
      },
    }),

    getSaleProducts: builder.query({
      query: ({ page = 1, perPage, minPrice, maxPrice }) => {
        let url = `/products?isOnSale=true&_page=${page}&_per_page=${perPage}`;
        if (minPrice !== undefined) url += `&price_gte=${minPrice}`;
        if (maxPrice !== undefined) url += `&price_lte=${maxPrice}`;
        return url;
      },
    }),

    getNewProducts: builder.query({
      query: ({ page = 1, perPage, minPrice, maxPrice }) => {
        let url = `/products?isNew=true&_page=${page}&_per_page=${perPage}`;
        if (minPrice !== undefined) url += `&price_gte=${minPrice}`;
        if (maxPrice !== undefined) url += `&price_lte=${maxPrice}`;
        return url;
      },
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetNewProductsQuery,
  useGetSaleProductsQuery,
  useGetProductQuery,
} = productsApi;
