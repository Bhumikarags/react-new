import {createSlice} from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name:"user",
    initialState:{count:1},
    reducers:{
        INCREAMENT:(state,action)=>{
            state.count  = state.count + 1; 
        },
        DECREMENT:(state,action)=>{
            if(state.count==0){
                state.count=0;
                return;
            }
            state.count  = state.count - 1; 
        },
        INCREAMENT_BY_VALUE:(state,action)=>{
            state.count  = state.count + action.payload.value; 
        },
    }
})

export const {INCREAMENT,DECREMENT,INCREAMENT_BY_VALUE} = UserSlice.actions;
export default UserSlice.reducer;