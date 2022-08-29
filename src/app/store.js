import { configureStore } from "@reduxjs/toolkit";
import productReducerSlice from "../feature/product/Product"
import userInputReducerSlice from "../feature/userInput/userInput";

const store = configureStore({
    reducer:{
        productReducer: productReducerSlice,
        userInputReducer: userInputReducerSlice
    }
})

export default store;