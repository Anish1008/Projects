import {createSlice} from "@reduxjs/toolkit"
const initialState={
    products:[],
    selected:[]
}
const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        setProduct:(state,action)=>{
            state.products = action.payload;
        },
        selectingProduct:(state,action)=>{
            state.selected=action.payload;
        }
    }
})

export const {setProduct,selectingProduct}=productSlice.actions;
export const selectProduct=(state)=>state.product.products;
export const selectedProduct=(state)=>state.product.selected;
export default productSlice.reducer;