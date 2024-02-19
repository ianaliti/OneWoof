import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    productItems: [],
    status: 'idle',
    error: null,
};

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = 'successful';
                state.productItems = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export const selectAllProducts = (state) => state.products.productItems;
export const getProductsStatus = (state) => state.products.status;
export const getProductsError = (state) => state.products.error;



export default productsSlice.reducer;

