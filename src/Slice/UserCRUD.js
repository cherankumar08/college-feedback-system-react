import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userDetails: [],
  selectedUser: [],
  isLoading: false,
  error: "",
};

const BASE_URL = "http://localhost:5000/student";

// GET THUNK ACTION
export const getStudentFromServer = createAsyncThunk(
  "StdDetails/getStudentFromServer",
  // Callback Function
  async (_, { rejectWithValue }) => {
    const response = await fetch(BASE_URL);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "No User found" });
    }
  }
);

// POST THUNK ACTION
export const AddDetailsToServer = createAsyncThunk(
  "StdDetails/AddDetailsToServer",
  // Callback Function
  async (details, { rejectWithValue }) => {
    const options = {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(BASE_URL, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "Details Cannot be added" });
    }
  }
);

// PATCH THUNK ACTION
export const UpdateDetailsToList = createAsyncThunk(
  "StdDetails/UpdateDetailsToList",
  // Callback Function
  async (details, { rejectWithValue }) => {
    const options = {
      method: "PATCH",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(BASE_URL + "/" + details.id, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "Details Cannot be Updated" });
    }
  }
);

// DELETE THUNK ACTION
export const DeleteDetailFromServer = createAsyncThunk(
  "StdDetails/DeleteDetailFromServer",
  // Callback Function
  async (details, { rejectWithValue }) => {
    const options = {
      method: "DELETE"
    };
    const response = await fetch(BASE_URL + "/" + details.id, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "Details Cannot be Deleted" });
    }
  }
);

const UserCRUD = createSlice({
  name: "usercrud",
  initialState,
  reducers: {
    addDetailstoList: (state, action) => {
      const id = Math.random() * 100;
      let details = { ...action.payload, id };
      state.userDetails.push(details);
    },
    removeDetailsFromList: (state, action) => {
      state.userDetails = state.userDetails.filter(
        (details) => details.id !== action.payload.id
      );
    },
    updateTasktoList: (state, action) => {
      console.log(action.payload);
      state.userDetails = state.userDetails.map((details) =>
        details.id === action.payload.id ? action.payload : details
      );
    },
    // For setting the Selected Details

    setSelecetedDetails: (state, action) => {
      state.selectedUser = action.payload;
      //   state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //For the Get The Details from the Server
      .addCase(getStudentFromServer.pending, (state) => {
        state.isLoading = true;
      }) //For the Get The Details from the Server
      .addCase(getStudentFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.userDetails = action.payload;
      }) //For the Get The Details from the Server
      .addCase(getStudentFromServer.rejected, (state, action) => {
        state.error = "";
        state.isLoading = false;
        state.userDetails = [];
      }) //For the POST The Details from the Server
      .addCase(AddDetailsToServer.pending, (state) => {
        state.isLoading = true;
      }) //For the POST The Details from the Server
      .addCase(AddDetailsToServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.userDetails.push(action.payload);
      }) //For the POST The Details from the Server
      .addCase(AddDetailsToServer.rejected, (state, action) => {
        state.error = "";
        state.isLoading = false;
      }) //For the PATCH The Details To the Server
      .addCase(UpdateDetailsToList.pending, (state) => {
        state.isLoading = true;
      }) //For the PATCH The Details To the Server
      .addCase(UpdateDetailsToList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.userDetails = state.userDetails.map((details) =>
          details.id === action.payload.id ? action.payload : details
        );
      }) //For the PATCH The Details To the Server
      .addCase(UpdateDetailsToList.rejected, (state, action) => {
        state.error = "";
        state.isLoading = false;
      })
      //For the DELETE The Details To the Server
      .addCase(DeleteDetailFromServer.pending, (state) => {
        state.isLoading = true;
      }) //For the DELETE The Details To the Server
      .addCase(DeleteDetailFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        // Remove the deleted user from the state
        state.userDetails = state.userDetails.filter(
          (details) => details.id !== action.payload.id
        );
      }) //For the DELETE The Details To the Server
      .addCase(DeleteDetailFromServer.rejected, (state, action) => {
        state.error = "";
        state.isLoading = false;
      });
  },
});

export const {
  addDetailstoList,
  removeDetailsFromList,
  updateTasktoList,
  setSelecetedDetails,
} = UserCRUD.actions;

export default UserCRUD.reducer;
