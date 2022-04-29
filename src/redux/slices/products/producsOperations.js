import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_PRODUCTS = process.env.REACT_APP_GET_PROD_URL;

const getProducts = createAsyncThunk('products/get', async () => {
    const { data } = await axios.get(GET_PRODUCTS);
    return data;
});

const deleteProduct = createAsyncThunk('products/delete', async (productId) => {
    const { data } = await axios.delete(GET_PRODUCTS, {
        data: { ProductID: productId },
    });
    return data;
});

const addProduct = createAsyncThunk('products/add', async (productData) => {
    const { data } = await axios.post(GET_PRODUCTS, productData);
    return data;
});

const operations = {
    getProducts,
    deleteProduct,
    addProduct,
};

export default operations;
