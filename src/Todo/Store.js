import { configureStore } from "@reduxjs/toolkit";
import Main from "./Reducer"

 const Store=configureStore({
    reducer:{
    custom:Main
    }
})
export default Store;