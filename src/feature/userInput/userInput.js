import { createSlice } from "@reduxjs/toolkit";


const userInputReducerSlice = createSlice({
    name:"userInput",
    initialState: {
        categoryValue: "",
        searchValue: "" 
    },
    reducers: {
        setCategoryValue: (state, action) => {state.categoryValue = action.payload},
        setSearchValue: (state, action) => {state.searchValue = action.payload}
    }
})

export default userInputReducerSlice.reducer
export const { setCategoryValue, setSearchValue} = userInputReducerSlice.actions;