import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_CATEGORY = process.env.REACT_APP_GET_CAT_URL;

const getCategory = createAsyncThunk('categories/get', async () => {
    const { data } = await axios.get(GET_CATEGORY);
    return data;
});

const operations = {
    getCategory,
};

export default operations;
