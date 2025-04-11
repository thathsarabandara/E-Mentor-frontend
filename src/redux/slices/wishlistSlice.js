import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWishlist = createAsyncThunk(
  'wishlist/fetchItems',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:5000/learner/notification', {withCredentials:true});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishlistItems: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.wishlistItems = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default wishlistSlice.reducer;
