import { api } from "../api/api";

export const commentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addComment: builder.mutation({
      query: (payload) => ({
        url: `/comment/create`,
        method: "POST",
        body: payload,
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["PostComments"],
    }),
    likeComment: builder.mutation({
      query: (commentId) => ({
        url: `/comment/${commentId}/like`,
        method: "POST",
      }),
      invalidatesTags: ["PostComments"],
    }),
    unlikeComment: builder.mutation({
      query: (commentId) => ({
        url: `/comment/${commentId}/unlike`,
        method: "POST",
      }),
      invalidatesTags: ["PostComments"],
    }),
  }),
});

export const {
  useAddCommentMutation,
  useLikeCommentMutation,
  useUnlikeCommentMutation,
} = commentApi;
