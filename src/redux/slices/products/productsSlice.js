import { createSlice } from '@reduxjs/toolkit';
import productsOperations from './producsOperations';

const initialState = {
    data: [],
    status: 'idle',
    err: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,

    extraReducers: {
        [productsOperations.getProducts.fulfilled]: (state, action) => {
            state.data = action.payload.products;
            state.status = 'fulfilled';
            state.err = null;
        },
        [productsOperations.getProducts.pending]: (state) => {
            state.status = 'pending';
        },
        [productsOperations.getProducts.rejected]: (state) => {
            state.status = null;
            state.err = 'ERROR';
        },

        [productsOperations.deleteProduct.fulfilled]: (state) => {
            state.status = 'fulfilled';
            state.err = null;
        },
        [productsOperations.deleteProduct.pending]: (state) => {
            state.status = 'pending';
        },
        [productsOperations.deleteProduct.rejected]: (state) => {
            state.status = null;
            state.err = 'ERROR';
        },

        [productsOperations.addProduct.fulfilled]: (state) => {
            state.status = 'fulfilled';
            state.err = null;
        },
        [productsOperations.addProduct.pending]: (state) => {
            state.status = 'pending';
        },
        [productsOperations.addProduct.rejected]: (state) => {
            state.status = null;
            state.err = 'ERROR';
        },
    },
});

export default productsSlice.reducer;
