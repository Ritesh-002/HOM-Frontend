import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Redux/Slices/userSlice.js'
export const store = configureStore({
    reducer: {
        users: userReducer
    }
})