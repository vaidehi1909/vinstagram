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
      query: ({ followingId }) => ({
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
      query: ({ followerId }) => ({
        url: `/follower/${followerId}/reject`,
        method: "POST",
      }),
      invalidatesTags: ["request"],
    }),
  }),
});

export const {
  useGetSuggestionsQuery,
  useFollowRequestMutation,
  useGetRequestListQuery,
  useAcceptMutation,
  useRejectMutation,
} = followerApi;
