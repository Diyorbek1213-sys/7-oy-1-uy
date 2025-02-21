import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: function (state, action) {
      state.value = action.payload;
    },

    closeModal: function (state, action) {
      state.value = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
