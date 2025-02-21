import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: function (state, action) {
      let existingProduct = state.value.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        alert("The product is already in the object.");
      } else {
        state.value.push(action.payload);
      }
    },
    removeFromCart: function(state, action) {
        state.value = state.value.filter((item, index) => {
            return index !== action.payload
        })
    },
    resetCart: function(state) {
        state.value = []
    }
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
