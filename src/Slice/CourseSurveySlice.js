// 1. Import necessary functions from Redux Toolkit
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 2. Define initial state
const initialState = {
  courseSurvey: [], // Ensure this matches what you expect to be returned by your async thunk
  error: "",
  isLoading: false,
};

export const getCourseQuestions = createAsyncThunk(
  "coursequestions/getCourseQuestions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5000/coursequestions");
      if (!response.ok) {
        throw new Error("No User found");
      }
      const data = response.json(); 
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);


// 3. Create a slice
const CourseSurveySlice = createSlice({
  name: "CourseSurveySlice",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCourseQuestions.pending, (state) => {})
      .addCase(getCourseQuestions.fulfilled, (state, action) => {
        state.courseSurvey = action.payload;
        state.error = "";
      })
      .addCase(getCourseQuestions.rejected, (state, action) => {
        state.error = action.payload.error;
        state.courseSurvey = [];
      });
  },
});

// 4. Extract action creators from the slice

export default CourseSurveySlice.reducer;
