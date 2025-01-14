import { api } from "../api/api";

export const followerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSuggestions: builder.query({
      query: (body) => ({
        url: "/follower/suggestions",
        method: "GET",
        body,
      }),
      providesTags: ["Follower"],
    }),
    followRequest: builder.mutation({
      query: (followingId) => ({
        url: `/follower/${followingId}/request`,
        method: "POST",
      }),
      invalidatesTags: ["Follower"],
    }),
    getRequestList: builder.query({
      query: () => ({
        url: "/follower/request/list",
        method: "GET",
      }),
      providesTags: ["request"],
    }),
    accept: builder.mutation({
      query: ({ followerId }) => ({
        url: `/follower/${followerId}/accept`,
        method: "PATCH",
      }),
      invalidatesTags: ["request"],
    }),
    reject: builder.mutation({
      query: (followerId) => ({
        url: `/follower/${followerId}/reject`,
        method: "POST",
      }),
      invalidatesTags: [
        "request",
        "FollowerList",
        "UserDetails",
        "UserProfile",
        "MyProfile",
      ],
    }),
    unfollow: builder.mutation({
      query: (followingId) => ({
        url: `/follower/${followingId}/unfollow`,
        method: "POST",
      }),
      invalidatesTags: [
        "request",
        "FollowerList",
        "UserDetails",
        "UserProfile",
        "MyProfile",
      ],
    }),
    list: builder.query({
      query: ({ userId, type }) => {
        let url = "/follower/list";
        if (userId) {
          url += `/${userId}/${type}`;
        } else {
          url += `/me/${type}`;
        }
        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["FollowerList"],
    }),
  }),
});

export const {
  useGetSuggestionsQuery,
  useFollowRequestMutation,
  useGetRequestListQuery,
  useAcceptMutation,
  useRejectMutation,
  useUnfollowMutation,
  useListQuery,
} = followerApi;
