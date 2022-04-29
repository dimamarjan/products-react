import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_SUPPLIER = process.env.REACT_APP_GET_SUPP_URL;

const getSupplier = createAsyncThunk('suppliers/get', async () => {
    const { data } = await axios.get(GET_SUPPLIER);
    return data;
});

const operations = {
    getSupplier,
};

export default operations;
