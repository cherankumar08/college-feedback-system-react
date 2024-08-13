import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseSurvey: [],
  error: "",
  isLoading: false,
};

export const instructorSurveygetSlice = createAsyncThunk(
  "instructorSlice/getInstructorQuestions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5000/instructorquestions");
      if (!response.ok) {
        throw new Error("No User found");
      }
      const data = response.json();
      return data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

const InstructorSurveySlice = createSlice({
  name: "InstructorSurveySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(instructorSurveygetSlice.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(instructorSurveygetSlice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.instructorsurvey = action.payload;
        state.error = "";
      })
      .addCase(instructorSurveygetSlice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.instructorsurvey = [];
      });
  },
});

export default InstructorSurveySlice.reducer;
