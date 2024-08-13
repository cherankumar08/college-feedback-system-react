import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 2. Define initial state
const initialState = {
  student: [],
  staff: [],
  faculty: [],
  coursequestions: [],
  instructor: [],
  extracurricular: [],
  selectedUser: {},
  error: "",
};

export const getUsersFromJson = createAsyncThunk(
  " student/getUsersFromJson",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:8000/student ");
    if (response.ok) {
      const data = response.json();
      console.log(data);
      return data;
    } else {
      return rejectWithValue({ error: "No User found" });
    }
  }
);

export const addusertoJson = createAsyncThunk(
  "user/addusertoJson",
  async (user, { rejectWithValue }) => {
    const option = {
      method: "Post",
      body: JSON.stringify(user),
      headers: { "Content-type": "application/json;charset=UTF-8" },
    };
    const response = await fetch("http://localhost:8000/student", option);
    if (response.ok) {
      const data = response.json();
      return data;
    } else {
      return rejectWithValue({ error: "something went wrong in adduser" });
    }
  }
);

export const upadateusertoJson = createAsyncThunk(
  "user/upadateusertoJson",
  async (user, { rejectWithValue }) => {
    const option = {
      method: "PATCH",
      body: JSON.stringify(user),
      headers: { "Content-type": "application/json;charset=UTF-8" },
    };
    const response = await fetch(
      "http://localhost:8000/student/" + user.id,
      option
    );
    if (response.ok) {
      const data = response.json();
      return data;
    } else {
      return rejectWithValue({ error: "something went wrong in upadate" });
    }
  }
);

export const deleteusertoJson = createAsyncThunk(
  "user/deleteusertoJson",
  async (user, { rejectWithValue }) => {
    const option = {
      method: "DELETE",
    };
    const response = await fetch(
      "http://localhost:8000/student/" + user.id,
      option
    );
    if (response.ok) {
      const data = response.json();
      return data;
    } else {
      return rejectWithValue({ error: "something went wrong in delete" });
    }
  }
);

// 3. Create a slice
export const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    // Action for adding an item
    addUser(state, action) {
      const id = Math.random() * 100;
      let newUser = { ...action.payload, id };
      state.student.push(newUser);
    },
    updateItem(state, action) {
      state.student = state.student.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
    // Action for deleting an item
    removeUser(state, action) {
      const idToDelete = action.payload;
      state.student = state.student.filter(
        (user) => user.id !== action.payload.id
      );
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersFromJson.pending, (state) => {})
      .addCase(getUsersFromJson.fulfilled, (state, action) => {
        state.student = action.payload;
        state.error = "";
      })
      .addCase(getUsersFromJson.rejected, (state, action) => {
        state.error = action.payload.error;
        state.student = [];
      })

      .addCase(addusertoJson.pending, (state) => {})
      .addCase(addusertoJson.fulfilled, (state, action) => {
        state.student.push(action.payload);
        state.error = "";
      })
      .addCase(addusertoJson.rejected, (state, action) => {
        state.error = action.payload.error;
      })
      .addCase(upadateusertoJson.pending, (state) => {})
      .addCase(upadateusertoJson.fulfilled, (state, action) => {
        state.student = state.student.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
        state.error = "";
      })
      .addCase(upadateusertoJson.rejected, (state, action) => {
        state.error = action.payload.error;
      })
      .addCase(deleteusertoJson.pending, (state) => {})
      .addCase(deleteusertoJson.fulfilled, (state, action) => {
        state.student = state.student.filter(
          (student) => student.id !== action.payload.id
        );
        state.error = "";
      })
      .addCase(deleteusertoJson.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

// 4. Extract action creators from the slice
export const { addUser, updateItem, removeUser, setSelectedUser } =
  UserSlice.actions;
export default UserSlice.reducer;
