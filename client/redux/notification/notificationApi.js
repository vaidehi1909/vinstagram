import { api } from "../api/api";

export const notificationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNotification: builder.query({
      query: (body) => ({
        url: "/notification/list",
        method: "GET",
        body,
      }),
      providesTags: ["Notification"],
    }),
    markAsRead: builder.mutation({
      query: (body) => ({
        url: "/notification/mark-read",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetNotificationQuery, useMarkAsReadMutation } =
  notificationApi;
