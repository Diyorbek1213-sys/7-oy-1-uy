import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: function (state, action) {
      state.value = action.payload;
    },
    logout: function (state, action) {
      state.value = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
