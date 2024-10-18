import { createSlice, PayloadAction} from "@reduxjs/toolkit";


 export interface CartModel {
    id:number,
name:string,
image:any,
price:string,

}
 
 export interface CartState {
    items :CartModel[]
}

const initialState:CartState={
    items:[]
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
     addItem(state, action:PayloadAction<CartModel>){
const existingItems = state.items.find((item)=>item.id === action.payload.id)
if(existingItems){
  
}
else{
    state.items.push({...action.payload})
}

     },
     removeItem(state){
        // state.items.filter((item)=>item.id !== action.payload.id)
        state.items.pop()
     }
    }
})

export const {addItem, removeItem} = cartSlice.actions
export default cartSlice.reducer
