// Import necessary dependencies
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { link } from '../utils';
import axios from "axios";
// Define the async thunk to fetch orders


export const fetchOrders = createAsyncThunk('fetchorders', async () => {
  try {
    // Call API to fetch orders
    const response = await axios.get(`${link}/orders/getorders`);
    // Return the fetched orders
    return response.data;   
    
  } catch (error) {
    // Handle any errors that occur during the API call
    throw new Error('Failed to fetch orders');
  }
});

// Define the orders slice
const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

// Export the async thunk and reducer
export default ordersSlice.reducer;
