import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            let existingProduct = state.value.find(item => item.id === action.payload.id);
            if (existingProduct) {
              alert("The product is already in the object.");
            } else {
              state.value.push(action.payload);
            }
        },
        removeProduct: (state, action) => {
            state.value = state.value.filter((item) => {
                return item.id !== action.payload
            })
        },
        editProducts: function(state, action) {
            state.value = state.value.map((item) => {
                if (item.id === action.payload) {
                    let qiymat = prompt('nomini o`zgartiring.')
                    item.name = qiymat
                }
    
                return item
            })
        }
    }
})

export default productsSlice.reducer
export const {addProduct, removeProduct, editProducts} = productsSlice.actions