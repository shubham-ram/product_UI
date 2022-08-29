import { configureStore } from "@reduxjs/toolkit";
import productReducerSlice from "../feature/product/Product"
import filterReducerSlice from "../feature/Filter/Filter"
import userInputReducerSlice from "../feature/userInput/userInput";

const store = configureStore({
    reducer:{
        productReducer: productReducerSlice,
        filterReducer: filterReducerSlice,
        userInputReducer: userInputReducerSlice
    }
})

export default store;