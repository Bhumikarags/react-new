import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Reducers/UserReducer";


const store = configureStore({
    reducer:{
        main:UserReducer,
    }
})

export default store;