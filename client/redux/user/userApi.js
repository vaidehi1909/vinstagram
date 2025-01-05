import { api } from "../api/api";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: "/user/signup",
        method: "POST",
        body,
      }),
    }),
    search: builder.mutation({
      query: (body) => ({
        url: "/user/search",
        method: "POST",
        body,
      }),
    }),
    getUserDetails: builder.query({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useSignupMutation, useSearchMutation, useGetUserDetailsQuery } =
  userApi;
