import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = { students:[],instructors:[],admins:[], error: "",currentUser:null };
export const getstudentsFromJson = createAsyncThunk(
    "students/getstudentsFromJson",
    async (_, { rejectWithValue }) => {
      console.log("hi");
      const response = await fetch("http://localhost:5003/students");
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
    "instructor/getInstructorFromJson",
    async (_, { rejectWithValue }) => {
      console.log("hi");
      const response = await fetch("http://localhost:5003/instructors");
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
    "admin/getadminFromJson",
    async (_, { rejectWithValue }) => {
      console.log("hi");
      const response = await fetch("http://localhost:5003/admins");
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
        const response = await fetch("http://localhost:5003/${userType}/${userId}");
        if (response.ok) {
          const data = await response.json();
          console.log("daa",data)
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
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(getstudentsFromJson.pending, (state) => {})
        .addCase(getstudentsFromJson.fulfilled, (state, action) => {
          state.students = action.payload;
          state.error = "";
        })
        .addCase(getstudentsFromJson.rejected, (state, action) => {
          state.error = action.payload.error;
          state.students = [];
        })
        .addCase(getInstructorFromJson .pending, (state) => {})
        .addCase(getInstructorFromJson .fulfilled, (state, action) => {
          state.instructors = action.payload;
          state.error = "";
        })
        .addCase(getInstructorFromJson .rejected, (state, action) => {
          state.error = action.payload.error;
          state.instructors= [];
        })
        .addCase(getadminFromJson.pending, (state) => {})
        .addCase(getadminFromJson.fulfilled, (state, action) => {
          state.admins = action.payload;
          state.error = "";
        })
        .addCase(getadminFromJson.rejected, (state, action) => {
          state.error = action.payload.error;
          state.admins = [];
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
  export default  userSlice.reducer;