import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Redux/Slices/UserSlice.js'
export const store = configureStore({
    reducer: {
        users: userReducer
    }
})