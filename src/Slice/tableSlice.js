// // tableSlice.js

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchTableData = createAsyncThunk("table/fetchData", async () => {
//   try {
//     const response = await fetch("http://localhost:5000/responses");
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching table data:", error);
//     alert("Hello");
//     throw error;
//   }
// });

// const tableSlice = createSlice({
//   name: "table",
//   initialState: {
//     data: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTableData.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchTableData.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.data = action.payload;
//       })
//       .addCase(fetchTableData.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export default tableSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   responseList: [],
//   isLoading: false,
//   error: "",
// };

// // GET THUNKACTION
// export const getResponseFromServer = createAsyncThunk(
//   "response/getResponseFromServer",
//   async (_, rejectWithValue) => {
//     const response = await fetch("http://localhost:5000/responses");
//     if (response.ok) {
//       const jsonResponse = await response.json();
//       return jsonResponse;
//     } else {
//       return rejectWithValue({ error: "No Response From Server" });
//     }
//   }
// );

// const tableSlice = createSlice({
//   name: "tableSLice",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getResponseFromServer.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getResponseFromServer.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = "";
//         state.responseList = action.payload;
//       })
//       .addCase(getResponseFromServer.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload.message;
//         state.responseList = [];
//       });
//   },
// });


// export default tableSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  responseList: [],
  isLoading: false,
  error: "",
};

// GET THUNKACTION
export const getResponseFromServer = createAsyncThunk(
  "response/getResponseFromServer",
  async (_, rejectWithValue) => {
    const response = await fetch("http://localhost:5000/responses");
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "No Response From Server" });
    }
  }
);

// NEW THUNKACTION FOR INSTRUCTOR SURVEY RESPONSES
export const getInstructorSurveyResponses = createAsyncThunk(
  "response/getInstructorSurveyResponses",
  async (_, rejectWithValue) => {
    const response = await fetch(
      "http://localhost:5000/InstructorSurveyResponses"
    );
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "No Response From Server" });
    }
  }
);

const tableSlice = createSlice({
  name: "tableSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getResponseFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getResponseFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.responseList = action.payload;
      })
      .addCase(getResponseFromServer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.responseList = [];
      })
      .addCase(getInstructorSurveyResponses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInstructorSurveyResponses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.responseList = action.payload; 
      })
      .addCase(getInstructorSurveyResponses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
        state.responseList = [];
      });
  },
});

export default tableSlice.reducer;
