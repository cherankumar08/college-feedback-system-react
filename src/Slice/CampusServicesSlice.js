import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to delete a question from the server
export const deleteQuestion = createAsyncThunk(
  "campusServices/deleteQuestion",
  async (questionId) => {
    await axios.delete(`http://localhost:5000/campusServices/${questionId}`);
    return questionId;
  }
);

// Thunk to update a question on the server
export const updateQuestion = createAsyncThunk(
  "campusServices/updateQuestion",
  async (updatedQuestion) => {
    for (let id in updatedQuestion) {
      await axios.patch(`http://localhost:5000/campusServices/${id}`, {
        question: updatedQuestion[id],
      });
    }

    return updatedQuestion;
  }
);

// FETCHING
export const fetchCourseQuestions = createAsyncThunk(
  "campusServices/fetchCourseQuestions",
  async () => {
    const response = await fetch("http://localhost:5000/campusServices");
    const data = await response.json();
    return data;
  }
);

const CampusServicesSlice = createSlice({
  name: "campusServices",
  initialState: {
    questions: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteQuestion.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteQuestion.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Remove the deleted question from the state
        state.questions = state.questions.filter(
          (question) => question.id !== action.payload
        );
      })
      .addCase(deleteQuestion.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateQuestion.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateQuestion.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Update the question in the state with the updated one
        state.questions = state.questions.map((question) =>
          question.id === action.payload.id ? action.payload : question
        );
      })
      .addCase(updateQuestion.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCourseQuestions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourseQuestions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.questions = action.payload;
      })
      .addCase(fetchCourseQuestions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default CampusServicesSlice.reducer;
