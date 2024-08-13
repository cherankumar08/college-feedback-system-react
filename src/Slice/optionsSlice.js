import { createSlice } from "@reduxjs/toolkit";

export const optionsSlice = createSlice({
  name: "options",
  initialState: {
    selectedOptions: [],
  },
  reducers: {
    addSelectedOption: (state, action) => {
      state.selectedOptions.push(action.payload);
    },
  },
});

export const { addSelectedOption } = optionsSlice.actions;

export const selectSelectedOptions = (state) => state.options.selectedOptions;

export default optionsSlice.reducer;
