import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slices/products/productsSlice';
import categoriesReducer from '../slices/categories/categoriesSlice';
import suppliersReducer from '../slices/suppliers/suppliersSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        suppliers: suppliersReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
});
