import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: [],
  reducers: {
    addToast: (state, action) => {
      state.push({
        id: Date.now(), // Unique ID for each toast
        message: action.payload.message,
        severity: action.payload.severity || "success", // Default to 'success'
      });
    },
    removeToast: (state, action) => {
      return state.filter((toast) => toast.id !== action.payload.id);
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;

export default toastSlice.reducer;
