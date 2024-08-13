// studentDetailsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const studentSlice = createSlice({
  name: "students",
  initialState: {
    details: [],
  },
  reducers: {
    addStudentSuccess: (state, action) => {
      state.details.push(action.payload);
    },
    addStudentFailure: (state, action) => {
      console.error("Error adding student:", action.payload);
    },
  },
});

export const { addStudentSuccess, addStudentFailure } = studentSlice.actions;

export const addStudent = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/students",
        formData
      );
      dispatch(addStudentSuccess(response.data));
      console.log("Student added successfully:", response.data);
    } catch (error) {
      dispatch(addStudentFailure(error.message));
    }
  };
};

export const selectStudentDetails = (state) => state.students.details;

export default studentSlice.reducer;
