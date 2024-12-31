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
  }),
});

export const { useCreatPostMutation } = postApi;
