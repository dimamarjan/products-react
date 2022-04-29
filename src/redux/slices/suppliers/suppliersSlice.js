import { createSlice } from '@reduxjs/toolkit';
import suppliersOperations from './suppliersOperations';

const initialState = {
    data: [],
    status: 'idle',
    err: null,
};

const suppliersSlice = createSlice({
    name: 'suppliers',
    initialState,

    extraReducers: {
        [suppliersOperations.getSupplier.fulfilled]: (state, action) => {
            state.data = action.payload.suppliers;
            state.status = 'fulfilled';
            state.err = null;
        },
        [suppliersOperations.getSupplier.pending]: (state) => {
            state.status = 'pending';
        },
        [suppliersOperations.getSupplier.rejected]: (state) => {
            state.status = null;
            state.err = 'ERROR';
        },
    },
});

export default suppliersSlice.reducer;
