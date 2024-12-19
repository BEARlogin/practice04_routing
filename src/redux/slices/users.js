import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers as fetchUsersApi } from "../../api/users";

export const fetchUsersThunk = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetchUsersApi();
      const mappedUsers = res.gridRecords.map((user) => {
        const detail = res.detailsRecords.find(
          (detail) => detail.id === user.id
        );
        return {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          active: user.active,
          details: {
            about: detail.about,
            hobby: detail.hobby,
            skills: detail.skills,
          },
        };
      });
      return mappedUsers;
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
