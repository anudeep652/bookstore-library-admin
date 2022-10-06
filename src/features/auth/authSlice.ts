import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { store } from "../../app/store";
import { createBook, initialStateType, loginType } from "../../types";
import { createABook, loginUser } from "./authService";

const initialState: initialStateType = {
  username: "",
  token: "",
  isSuccess: false,
  isLoggedIn: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async (data: loginType, thunkAPI) => {
    try {
      return await loginUser(data);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const createNewBook = createAsyncThunk(
  "auth/createNewBook",
  async (data: createBook, thunkAPI) => {
    try {
      const { token } = store.getState().auth;
      console.log(token);
      return await createABook(data, token || "");
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {})
      .addCase(login.fulfilled, (state, action: AnyAction) => {
        state.username = action.payload?.username;
        state.token = action.payload?.token;
        state.isSuccess = true;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state) => {})
      .addCase(createNewBook.pending, (state) => {})
      .addCase(createNewBook.fulfilled, (state, action: AnyAction) => {})
      .addCase(createNewBook.rejected, (state) => {});
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
