import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import authSlice from "./auth/authSlice";
import followerSlice from "./follower/followerSlice";
import notificationSlice from "./notification/notificationSlice";
import recentSearchSlice from "./user/recentSearchSlice";

const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlice,
  follower: followerSlice,
  notification: notificationSlice,
  recentSearch: recentSearchSlice,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});
