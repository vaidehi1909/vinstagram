import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to handle adding searches based on userId from another slice
export const addSearch = createAsyncThunk(
  "recentSearch/addSearchWithUserId",
  (newSearch, { getState }) => {
    const state = getState();
    const userId = state.auth?.user?._id;

    return { userId, newSearch };
  }
);

export const removeSearch = createAsyncThunk(
  "recentSearch/removeSearchWithUserId",
  (searchId, { getState }) => {
    const state = getState();
    const userId = state.auth.user._id;

    return { userId, searchId };
  }
);

const initialState = {
  searches: [], // Array to store recent search objects
};

// Helper function to get key for a specific user
const getStorageKey = (userId) => `recent_searches_${userId}`;

// Load searches from localStorage
const loadSearchesFromLocalStorage = (userId) => {
  const savedSearches = localStorage.getItem(getStorageKey(userId));
  return savedSearches ? JSON.parse(savedSearches) : [];
};

const recentSearchSlice = createSlice({
  name: "recentSearch",
  initialState,
  reducers: {
    loadSearches: (state, action) => {
      const userId = action.payload;
      if (state.searches.length === 0 && userId) {
        state.searches = loadSearchesFromLocalStorage(userId);
      }
    },
    removeSearch: (state, action) => {
      const id = action.payload;
      state.searches = state.searches.filter((search) => search._id !== id);
      localStorage.setItem(
        getStorageKey(userId),
        JSON.stringify(state.searches)
      );
    },
    clearSearches: (state) => {
      state.searches = [];
      localStorage.removeItem(getStorageKey(userId));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addSearch.fulfilled, (state, action) => {
        const { userId, newSearch } = action.payload;
        const existingIndex = state.searches.findIndex(
          (search) => search._id === newSearch._id
        );

        // Remove duplicate if exists
        if (existingIndex !== -1) {
          state.searches.splice(existingIndex, 1);
        }

        // Add the new search object to the beginning
        state.searches.unshift(newSearch);

        // Limit to 10 items
        if (state.searches.length > 10) {
          state.searches.pop();
        }
        // Save to localStorage
        localStorage.setItem(
          getStorageKey(userId),
          JSON.stringify(state.searches)
        );
      })
      .addCase(removeSearch.fulfilled, (state, action) => {
        const { userId, searchId } = action.payload;
        state.searches = state.searches.filter(
          (search) => search._id !== searchId
        );
        localStorage.setItem(
          getStorageKey(userId),
          JSON.stringify(state.searches)
        );
      });
  },
});

export const { loadSearches, clearSearches } = recentSearchSlice.actions;

export default recentSearchSlice.reducer;
