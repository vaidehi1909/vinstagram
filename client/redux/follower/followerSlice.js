"use client";
import { createSlice } from "@reduxjs/toolkit";
import { followerApi } from "./followerApi";

export const initialState = {
  sugestion: [],
  requestList: [],
  loading: false,
  error: {},
};

const followerSlice = createSlice({
  name: "follower",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        followerApi.endpoints.getSuggestions.matchPending,
        (state) => {
          state.loading = true;
          state.error = {};
        }
      )
      .addMatcher(
        followerApi.endpoints.getSuggestions.matchFulfilled,
        (state, { payload }) => {
          state.loading = false;
          state.error = {};
          state.sugestion = payload?.payload;
        }
      )
      .addMatcher(
        followerApi.endpoints.getSuggestions.matchRejected,
        (state) => {
          state.loading = false;
          state.error = {};
        }
      )
      .addMatcher(
        followerApi.endpoints.getRequestList.matchPending,
        (state) => {
          state.loading = true;
          state.error = {};
        }
      )
      .addMatcher(
        followerApi.endpoints.getRequestList.matchFulfilled,
        (state, { payload }) => {
          state.loading = false;
          state.error = {};
          state.requestList = payload?.payload;
        }
      )
      .addMatcher(
        followerApi.endpoints.getRequestList.matchRejected,
        (state) => {
          state.loading = false;
          state.error = {};
        }
      );
  },
});

export const {} = followerSlice.actions;

export default followerSlice.reducer;
