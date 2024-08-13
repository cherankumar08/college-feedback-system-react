// studentProfileSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStudentProfile = createAsyncThunk(
  "studentProfile/fetchStudentProfile",
  async () => {
    const response = await fetch("http://localhost:5000/Student");
    return response.json();
  }
);

const studentProfileSlice = createSlice({
  name: "studentProfile",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStudentProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchStudentProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default studentProfileSlice.reducer;
 // npx json-server --watch server/feedbackdata.json --port 5000  