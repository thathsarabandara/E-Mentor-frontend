import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserProfile = createAsyncThunk(
    'user/fetchUserProfile',
    async (__dirname, thunkAPI) =>{
        try {
            const response = await axios.get('http://localhost:5000/learner/', {withCredentials: true});
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: 'Thathsara',
        profile: '',
        isAuthenticated: true,
        isLoading:false,
        error: null,
    },
    reducers: {
        logout: (state) =>{
            state.username='';
            state.profile='';
            state.isAuthenticated=false;
        },
    },
    extraReducers: (builder)=>{
        builder
            .addCase(fetchUserProfile.pending, (state)=>{
                state.isLoading= true;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) =>{
                state.username= action.payload.name;
                state.profile = action.payload.image || '';
                state.isAuthenticated = true;
                state.isLoading = false;
            })
            .addCase(fetchUserProfile.rejected, (state, action)=>{
                state.error = action.payload;
                state.isLoading = false;
            });
    },
})
export default userSlice.reducer
export const {logout} = userSlice.actions