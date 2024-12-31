"use client";
import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "./userApi";

export const initialState = {
  user: {},
  loading: false,
  error: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
