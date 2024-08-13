// Course Survey

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to delete a question from the server
export const deleteQuestion = createAsyncThunk(
  "questionBank/deleteQuestion",
  async (questionId) => {
    await axios.delete(`http://localhost:5000/coursequestions/${questionId}`);
    return questionId;
  }
);

// Thunk to update a question on the server
export const updateQuestion = createAsyncThunk(
  "questionBank/updateQuestion",
  async (updatedQuestion) => {

    for(let id in updatedQuestion) {
      await axios.patch(`http://localhost:5000/coursequestions/${id}`, {
        question: updatedQuestion[id],
      });
    }

    return updatedQuestion;
  }
);

const questionBankSlice = createSlice({
  name: "questionBank",
  initialState: {
    questions: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [deleteQuestion.pending]: (state) => {
      state.status = "loading";
    },
    [deleteQuestion.fulfilled]: (state, action) => {
      state.status = "succeeded";
      // Remove the deleted question from the state
      state.questions = state.questions.filter(
        (question) => question.id !== action.payload
      );
    },
    [deleteQuestion.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [updateQuestion.pending]: (state) => {
      state.status = "loading";
    },
    [updateQuestion.fulfilled]: (state, action) => {
      state.status = "succeeded";
      // Update the question in the state with the updated one
      state.questions = state.questions.map((question) =>
        question.id === action.payload.id ? action.payload : question
      );
    },
    [updateQuestion.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default questionBankSlice.reducer;