// Redux slice (surveySlice.js)
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const sendSurveyQuestions = createAsyncThunk(
  "survey/sendSurveyQuestions",
  async (surveyData, thunkAPI) => {
    try {
      // Make HTTP POST request to save survey data to JSON server
      const response = await axios.post(
        "http://localhost:5000/coursequestions ",
        surveyData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const surveySlice = createSlice({
  name: "survey",
  initialState: {
    questions: [],
    errors: [],
    loading: false,
    success: false,
    errorMessage: "",
  },
  reducers: {
    // addQuestion(state, action) {
    //   state.questions.push(action.payload);
    //   console.log("Hellow");
    // },
    updateQuestion(state, action) {
      // Implement logic to update a question if needed
    },
    setError(state, action) {
      state.errorMessage = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      // .addCase(sendSurveyQuestions.pending, (state) => {
      //   state.loading = true;
      // })
      .addCase(sendSurveyQuestions.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.errorMessage = "";
      })
      .addCase(sendSurveyQuestions.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { addQuestion, updateQuestion, setError } = surveySlice.actions;

export const selectQuestions = (state) => state.survey.questions;
export const selectErrors = (state) => state.survey.errors;

export default surveySlice.reducer;
