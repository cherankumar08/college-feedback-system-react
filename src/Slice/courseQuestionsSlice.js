import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import React, { useState } from "react";


// Fetching and display the Questions
export const fetchCourseQuestions = createAsyncThunk(
  "courseQuestions/fetchCourseQuestions",
  async () => {
    const response = await fetch("http://localhost:5000/coursequestions");
    const data = await response.json();
    return data;
  }
);

const courseQuestionsSlice = createSlice({
  name: "courseQuestions",
  initialState: {
    questions: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
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

export default courseQuestionsSlice.reducer;
