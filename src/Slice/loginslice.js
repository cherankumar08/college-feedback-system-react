import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  Student: [],
  Faculty: [],
  Admin: [],
  Staff: [],
  error: "",
  currentUser: null,
};
export const getstudentsFromJson = createAsyncThunk(
  "Student/getstudentsFromJson",
  async (_, { rejectWithValue }) => {
    console.log("hi");
    const response = await fetch("http://localhost:5000/Student");
    console.log(response);
    if (response.ok) {
      const data = response.json();
      console.log("hello");
      return data;
    } else {
      return rejectWithValue({ error: "No users found" });
    }
  }
);
export const getInstructorFromJson = createAsyncThunk(
  "Faculty/getInstructorFromJson",
  async (_, { rejectWithValue }) => {
    console.log("hi");
    const response = await fetch("http://localhost:5000/Faculty");
    console.log(response);
    if (response.ok) {
      const data = response.json();
      console.log("hello");
      return data;
    } else {
      return rejectWithValue({ error: "No users found" });
    }
  }
);
export const getadminFromJson = createAsyncThunk(
  "Admin/getadminFromJson",
  async (_, { rejectWithValue }) => {
    console.log("hi");
    const response = await fetch("http://localhost:5000/Admin");
    console.log(response);
    if (response.ok) {
      const data = response.json();
      console.log("hello");
      return data;
    } else {
      return rejectWithValue({ error: "No users found" });
    }
  }
);
export const getstaffFromJson = createAsyncThunk(
  "Staff/getadminFromJson",
  async (_, { rejectWithValue }) => {
    console.log("hi");
    const response = await fetch("http://localhost:5000/Staff");
    console.log(response);
    if (response.ok) {
      const data = response.json();
      console.log("hello");
      return data;
    } else {
      return rejectWithValue({ error: "No users found" });
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async ({ userId, userType }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:5000/${userType}/${userId}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("daa", data);
        return data;
      } else {
        return rejectWithValue({ error: "User not found" });
      }
    } catch (error) {
      return rejectWithValue({ error: "Failed to fetch user details" });
    }
  }
);
export const userSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    clearCurrentUser(state) {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getstudentsFromJson.pending, (state) => {})
      .addCase(getstudentsFromJson.fulfilled, (state, action) => {
        state.Student = action.payload;
        state.error = "";
      })
      .addCase(getstudentsFromJson.rejected, (state, action) => {
        state.error = action.payload.error;
        state.Student = [];
      })
      .addCase(getInstructorFromJson.pending, (state) => {})
      .addCase(getInstructorFromJson.fulfilled, (state, action) => {
        state.Faculty = action.payload;
        state.error = "";
      })
      .addCase(getInstructorFromJson.rejected, (state, action) => {
        state.error = action.payload.error;
        state.Faculty = [];
      })
      .addCase(getadminFromJson.pending, (state) => {})
      .addCase(getadminFromJson.fulfilled, (state, action) => {
        state.Admin = action.payload;
        state.error = "";
      })
      .addCase(getadminFromJson.rejected, (state, action) => {
        state.error = action.payload.error;
        state.Admin = [];
      })
      .addCase(getstaffFromJson.pending, (state) => {})
      .addCase(getstaffFromJson.fulfilled, (state, action) => {
        state.Staff = action.payload;
        state.error = "";
      })
      .addCase(getstaffFromJson.rejected, (state, action) => {
        state.error = action.payload.error;
        state.Staff = [];
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        // Update the currentUser state with the fetched user details
        state.currentUser = action.payload;
      });
  },
});
export const { setCurrentUser, clearCurrentUser } = userSlice.actions;
// export const { addUser, removeUser, updateUser, setSelectedUser } =
//   UserSlice.actions;
export default userSlice.reducer;
