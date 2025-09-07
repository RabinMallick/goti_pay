import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// baseURL environment থেকে নিবে
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

export const apiSlice = createApi({
  reducerPath: "api", // slice name
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      // token থাকলে সেট করা
      const token = (getState() as any).auth?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Booking", "Hotel"], // cache invalidation এর জন্য
  endpoints: (builder) => ({
    // Example: get current user
    getUser: builder.query({
      query: () => "/user/profile",
      providesTags: ["User"],
    }),

    // Example: login
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),

    // Example: booking list
    getBookings: builder.query({
      query: ({ page = 1, pageSize = 10 }) =>
        `/booking?page=${page}&pageSize=${pageSize}`,
      providesTags: ["Booking"],
    }),
  }),
});

// hooks auto-generate হবে
export const {
  useGetUserQuery,
  useLoginMutation,
  useGetBookingsQuery,
} = apiSlice;
