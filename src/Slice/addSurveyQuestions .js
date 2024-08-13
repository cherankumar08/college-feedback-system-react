import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an async thunk to add survey questions
export const addSurveyQuestions = createAsyncThunk(
  "surveyQuestions/addQuestions",
  async (newQuestionsData) => {
    const response = await fetch("http://localhost:5000/coursequestions ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestionsData),
    });

    if (!response.ok) {
      throw new Error("Failed to add survey questions");
    }

    const data = await response.json();
    return data;
  }
);

// Define the survey questions slice
const surveyQuestionsSlice = createSlice({
  name: "surveyQuestions",
  initialState: {
    questions: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addSurveyQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addSurveyQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions.push(...action.payload); // Assuming payload is the added questions
      })
      .addCase(addSurveyQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const {} = surveyQuestionsSlice.actions;
export default surveyQuestionsSlice.reducer;
