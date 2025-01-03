import { api } from "../api/api";

export const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    creatPost: builder.mutation({
      query: (body) => ({
        url: "/post/create",
        method: "POST",
        body,
        formData: true,
      }),
    }),
    getFeedPost: builder.query({
      query: (params) => ({
        url: `post/feed`,
        method: "GET",
        params,
      }),
    }),
    likePost: builder.mutation({
      query: (postId) => ({
        url: `/post/${postId}/like`,
        method: "POST",
      }),
    }),
    unlikePost: builder.mutation({
      query: (postId) => ({
        url: `/post/${postId}/unlike`,
        method: "POST",
      }),
    }),
    getUserPosts: builder.query({
      query: () => ({
        url: "/post/me",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreatPostMutation,
  useLazyGetFeedPostQuery,
  useLikePostMutation,
  useUnlikePostMutation,
  useGetUserPostsQuery,
} = postApi;
