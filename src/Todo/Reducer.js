import { createSlice } from "@reduxjs/toolkit";

const user=createSlice({
    name:'user',
    initialState:["get"],
    reducers:{
       CREATE:(state,action)=>{
           state=state.push(action.payload);
           
       },
       UPDATE:(state,action)=>{
          
       },
       DELETE:(state,action)=>{

       }
    }
})
export const{CREATE,UPDATE,DELETE}=user.actions;
export default user.reducer;