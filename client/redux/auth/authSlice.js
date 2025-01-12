"use client";
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./authApi";

const getTokenFromLocalStorage = () => {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

export const initialState = {
  token: getTokenFromLocalStorage() || null,
  user: null,
  loading: false,
  error: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      localStorage.removeItem("token");
      state.auth = {};
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.logIn.matchPending, (state) => {
        state.auth = {};
        state.loading = true;
        state.error = {};
      })
      .addMatcher(
        authApi.endpoints.logIn.matchFulfilled,
        (state, { payload }) => {
          state.loading = false;
          state.error = {};
          state.token = payload?.payload;
          localStorage.setItem("token", payload?.payload);
        }
      )
      .addMatcher(
        authApi.endpoints.logIn.matchRejected,
        (state, { payload }) => {
          state.auth = {};
          state.loading = false;
          state.error = { ...payload.data };
        }
      )
      .addMatcher(authApi.endpoints.UserProfile.matchPending, (state) => {
        state.loading = true;
        state.error = {};
      })
      .addMatcher(
        authApi.endpoints.UserProfile.matchFulfilled,
        (state, { payload }) => {
          state.loading = false;
          state.error = {};
          state.user = payload?.payload;
        }
      )
      .addMatcher(
        authApi.endpoints.UserProfile.matchRejected,
        (state, { payload }) => {
          state.auth = {};
          state.loading = false;
          state.user = null;
          state.error = { ...payload.data };
        }
      );
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
