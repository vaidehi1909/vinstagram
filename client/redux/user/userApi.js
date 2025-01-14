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
      providesTags: ["UserDetails"],
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: "/user/reset-password",
        method: "POST",
        body,
      }),
    }),
    updateUserProfile: builder.mutation({
      query: (body) => ({
        url: "/user/profile",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["MyProfile"],
    }),
    updateProfileImage: builder.mutation({
      query: (body) => ({
        url: "/user/profile-image",
        method: "POST",
        body,
        formData: true,
      }),
      invalidatesTags: ["MyProfile"],
    }),
    removeProfileImage: builder.mutation({
      query: () => ({
        url: "/user/profile-image",
        method: "DELETE",
      }),
      invalidatesTags: ["MyProfile"],
    }),
  }),
});

export const {
  useSignupMutation,
  useSearchMutation,
  useGetUserDetailsQuery,
  useResetPasswordMutation,
  useUpdateUserProfileMutation,
  useUpdateProfileImageMutation,
  useRemoveProfileImageMutation,
} = userApi;
