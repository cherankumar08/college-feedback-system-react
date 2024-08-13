import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

const initialState = {
  profileData: null,
  error: null,
  isLoading: false,
};

export const fetchStudentProfile = createAsyncThunk(
  "studentProfile/fetchStudentProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5003/Student/1");
      if (!response.ok) {
        throw new Error("Failed to fetch student profile");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

const selectStudentProfileSlice = (state) => state.studentProfile;

export const selectStudentProfile = createSelector(
  selectStudentProfileSlice,
  (studentProfile) => studentProfile.profileData
);

export const studentProfileSlice = createSlice({
  name: "studentProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchStudentProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profileData = action.payload;
        state.error = null;
      })
      .addCase(fetchStudentProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.profileData = null;
      });
  },
});

export default studentProfileSlice.reducer;
