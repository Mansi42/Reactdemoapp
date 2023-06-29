import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFunc } from "../../Backenddata";

const initialValues = {
  users: [],
  isError: false,
  isFetching: false,
  errorCode: 0,
  errorMessage: "",
};

export const getUsers = createAsyncThunk(
  "users/getusers",
  async (_, thunkAPI) => {
    try {
      const response = await getFunc();
      console.log(response.data);
      if (response.status == 200) {
        return response.data;
      } else {
        const message = response.message;
        const status = response.status || 404;
        return thunkAPI.rejectWithValue([status, message]);
      }
    } catch (e) {
      if (e.status && e.message) {
        const message = e.message;
        const status = e.status;
        return thunkAPI.rejectWithValue([status, message]);
      }
      console.log("error", e.response.data);
      thunkAPI.rejectWithValue([e.error, e.message]);
    }
  }
);

export const UserReducer = createSlice({
  name: "users",
  initialState: initialValues,
  reducers: {
    clearState: (state) => {
      console.log("manasssqw");
      state.isError = false;
      state.errorCode = 0;
      state.errorMessage = "";
      state.isFetching = false;
      return state;
    },
  },

  extraReducers: {
    [getUsers.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.users = payload;
      state.isFetching = false;
      return state;
    },
    [getUsers.rejected]: (state, { payload }) => {
      state.isError = false;
      state.isFetching = false;
      state.errorCode = payload[0];
      state.errorMessage = payload[1];
      return state;
    },
    [getUsers.pending]: (state, { payload }) => {
      state.isFetching = true;
      return state;
    },
  },
});

export const { clearState } = UserReducer.actions;
export const { extraReducers } = UserReducer.actions;

export const userSelector = (state) => state.users;
