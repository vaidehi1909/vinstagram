"use client";
import { createSlice } from "@reduxjs/toolkit";
import { notificationApi } from "./notificationApi";

export const initialState = {
  notification: [],
  loading: false,
  error: {},
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        notificationApi.endpoints.getNotification.matchPending,
        (state) => {
          state.loading = true;
          state.error = {};
        }
      )
      .addMatcher(
        notificationApi.endpoints.getNotification.matchFulfilled,
        (state, { payload }) => {
          console.log(payload);
          state.loading = false;
          state.error = {};
          state.notification = payload?.payload;
        }
      )
      .addMatcher(
        notificationApi.endpoints.getNotification.matchRejected,
        (state) => {
          state.loading = false;
          state.error = {};
        }
      );
  },
});

export const {} = notificationSlice.actions;

export default notificationSlice.reducer;
