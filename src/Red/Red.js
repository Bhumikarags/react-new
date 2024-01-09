import { createSlice } from "@reduxjs/toolkit";

const userSLlice=createSlice({
    name:"user",
    initialState:{c:0},
    reducers:{
        INC:(state,action)=>{ 
            state.c=state.c+1;
            console.log(state.c);

        },
        DEC:(state,action)=>{
            state.c=state.c-1;

        },
        BY:(state,action)=>{
            state.c=state.c+(action.payload.val)
        }
    }

})

export const{INC,DEC,BY}=userSLlice.actions;
export default userSLlice.reducer;
