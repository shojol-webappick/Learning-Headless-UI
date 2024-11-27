import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BlogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://one-blood-for-all-server.vercel.app",
  }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs-for-blog-page",
    }),
    getBlogById: builder.query({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogByIdQuery } = BlogApi;