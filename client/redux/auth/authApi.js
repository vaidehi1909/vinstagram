import { api } from "../api/api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    logIn: builder.mutation({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body,
      }),
    }),
    UserProfile: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["MyProfile"],
    }),
  }),
});

export const { useLogInMutation, useLazyUserProfileQuery } = authApi;
