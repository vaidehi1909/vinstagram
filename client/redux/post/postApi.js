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
    getMyPosts: builder.query({
      query: () => ({
        url: "/post/user/me",
        method: "GET",
      }),
    }),
    getUserPosts: builder.query({
      query: (userId) => ({
        url: `/post/user/${userId}`,
        method: "GET",
      }),
    }),
    getPostDetails: builder.query({
      query: (postId) => ({
        url: `/post/${postId}`,
        method: "GET",
      }),
    }),
    getPostComments: builder.query({
      query: (postId) => ({
        url: `/post/${postId}/comments`,
        method: "GET",
      }),
      providesTags: ["PostComments"],
    }),
  }),
});

export const {
  useCreatPostMutation,
  useLazyGetFeedPostQuery,
  useLikePostMutation,
  useUnlikePostMutation,
  useGetUserPostsQuery,
  useGetMyPostsQuery,
  useGetPostDetailsQuery,
  useGetPostCommentsQuery,
} = postApi;
