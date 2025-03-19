import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []

export const getAllUsers = createAsyncThunk('users/fetchAllUsers', async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        return response.data
    } catch (error) {
        console.log(error.message)
    }
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.fulfilled, (_, action) => {
            return action.payload;
        });
    }
})


export default userSlice.reducer