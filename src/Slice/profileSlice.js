// profileSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state
const initialState = {
  profiles: [],
  loading: false,
  error: null,
};

// Define the async thunk to fetch profile data
export const fetchProfileData = createAsyncThunk(
  "profiles/fetchProfileData",
  async () => {
    try {
      const response = await axios.get("http://localhost:5003/profiles");
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

// Create the profile slice
const profileSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    deleteProfile(state, action) {
      const profileId = action.payload;
      state.profiles = state.profiles.filter(
        (profile) => profile.id !== profileId
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.loading = false;
        state.profiles = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { deleteProfile } = profileSlice.actions;
export default profileSlice.reducer;
