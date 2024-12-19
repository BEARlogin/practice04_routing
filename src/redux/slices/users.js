import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers as fetchUsersApi } from "../../api/users";

export const fetchUsersThunk = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchUsersApi();
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { users } = getState();
      if (users.loading) {
        return false;
      }
    },
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    loading: false,
    loaded: false,
  },
  reducers: {
    userUpdate: (state, action) => {
      state.users = state.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            ...action.payload.data,
          };
        }
        return user;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.loaded = true;
      })
      .addCase(fetchUsersThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { userUpdate } = usersSlice.actions;
export default usersSlice.reducer;
