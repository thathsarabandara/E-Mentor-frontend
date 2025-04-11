import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCartItems = createAsyncThunk(
    'cart/fetchItems',
    async(_, thunkAPI) =>{
        try {
            const response = await axios.get('http://localhost:5000/learner/cart', {withCredentials:true})
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        cartItems: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartItems.pending, (state) =>{
                state.isLoading = true;
            })
            .addCase(fetchCartItems.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.cartItems = action.payload;
            })
            .addCase(fetchCartItems.rejected, (state, action) =>{
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export default cartSlice.reducer;