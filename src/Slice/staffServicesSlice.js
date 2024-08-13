import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  questionList: [],
  selectedQuestion: {},
  isLoading: false,
  error: "",
};

// GET Question From Server
export const getQuestionFromServer = createAsyncThunk(
  "facility/getQuestionFromServer",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:5000/CampusServicesQuestions"
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      } else {
        return rejectWithValue({ error: "No Questions Found" });
      }
    } catch (error) {
      return rejectWithValue({ error: "Error fetching questions" });
    }
  }
);

// UPDATE  Question To Server
export const UpdateQuestionToServer = createAsyncThunk(
  "facility/UpdateQuestionToServer",
  async (question, { rejectWithValue }) => {
    const options = {
      method: "PATCH",
      body: JSON.stringify(question),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    try {
      const response = await fetch(
        `http://localhost:5000/CampusServicesQuestions/${question.id}`,
        options
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      } else {
        return rejectWithValue({ error: "No Questions Found" });
      }
    } catch (error) {
      return rejectWithValue({ error: "Error Updating the questions" });
    }
  }
);


const staffServicesSlice = createSlice({
  name: "staffServicesSlice",
  initialState,
  reducers: {
    addServicesQnToServer: (state, action) => {
      const id = Math.random() * 100;
      const question = { ...action.payload, id };
      state.questionList.push(question);
    },

    setSelectedQuestion: (state, action) => {
      state.selectedQuestion = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestionFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuestionFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.questionList = action.payload;
      })
      .addCase(getQuestionFromServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
        state.questionList = [];
      })
      .addCase(UpdateQuestionToServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UpdateQuestionToServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.questionList = state.questionList.map((question) =>
          question.id === action.payload.id ? action.payload : question
        );
      })
      .addCase(UpdateQuestionToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
        state.questionList = [];
      });
  },
});


export const { setSelectedQuestion, addServicesQnToServer } =
  staffServicesSlice.actions;


export default staffServicesSlice.reducer;
