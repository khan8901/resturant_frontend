import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'; 
import { link } from "../utils"; 


// Define the async thunk to fetch products from API
export const fetchProducts = createAsyncThunk('fetchProducts', async ({ page, searchTerm ,limit}) => {
  try {
    console.log(link, " lmao"); 

    // Make API request with pagination and search term parameters
    const response = await axios.get(`${link}/products/getproducts`, { 
        params:{searchTerm, page, limit}
    });
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch products from API');
  }
});

// Define the products slice using createSlice
export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isLoading: false,
    error: null,
    currentPage: 1,
    searchTerm: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
