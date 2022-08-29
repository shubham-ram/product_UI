import { createSlice } from "@reduxjs/toolkit";

const filterReducerSlice = createSlice({
    name:"filter",
    initialState:{
        filterValue: ""
    },
    reducers:{
        setFilterValue: (state, action) =>{state.filterValue = action.payload}
    }
})

export default filterReducerSlice.reducer;
export const {setFilterValue} = filterReducerSlice.actions;