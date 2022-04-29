import { createSlice } from '@reduxjs/toolkit';
import categoriesOperations from './categoriesOperations';

const initialState = {
    data: [],
    status: 'idle',
    err: null,
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,

    extraReducers: {
        [categoriesOperations.getCategory.fulfilled]: (state, action) => {
            state.data = action.payload.categories;
            state.status = 'fulfilled';
            state.err = null;
        },
        [categoriesOperations.getCategory.pending]: (state) => {
            state.status = 'pending';
        },
        [categoriesOperations.getCategory.rejected]: (state) => {
            state.status = null;
            state.err = 'ERROR';
        },
    },
});

export default categoriesSlice.reducer;
