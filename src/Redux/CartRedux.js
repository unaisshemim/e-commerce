import {createSlice} from '@reduxjs/toolkit';

const cartSlice =createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        quantity:0,
        total:0,
    }
    ,reducers:{
        addProducts:(state,action)=>{
            state.cartItems.push(action.payload);
            state.quantity+=1;
            state.total+=action.payload.price
        }
    }
})
export const {addProducts}=cartSlice.action
export default cartSlice.reducer