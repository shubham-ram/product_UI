import { createSlice } from "@reduxjs/toolkit";

const productReducerSlice = createSlice({
    name: "product",
    initialState: {
        name: "",
        category: "",
        price: "",
        imgUrl:"",
        nameCheck:true,
        priceCheck: true,
        categoryCheck: true,
        imgUrlCheck: true
    },
    reducers:{
        setName: (state, action) => {state.name = action.payload},
        setCategory: (state, action) => {state.category = action.payload},
        setPrice: (state, action) => {state.price = action.payload},
        setImgUrl: (state, action) => {state.imgUrl = action.payload},
        setNameCheck: (state, action) => {state.nameCheck = action.payload},
        setPriceCheck : (state, action) => {state.priceCheck = action.payload},
        setCategoryCheck: (state, action) => {state.categoryCheck = action.payload},
        setImgUrlCheck: (state, action) => {state.imgUrlCheck = action.payload}
    }
})

export default productReducerSlice.reducer;
export const {setName, setCategory, setPrice, setImgUrl} = productReducerSlice.actions;
export const {setNameCheck, setCategoryCheck, setPriceCheck, setImgUrlCheck} = productReducerSlice.actions;