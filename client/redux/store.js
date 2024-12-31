"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import authSlice from "./auth/authSlice";
import followerSlice from "./follower/followerSlice";
import notificationSlice from "./notification/notificationSlice";

const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlice,
  follower: followerSlice,
  notification: notificationSlice,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});
