import { configureStore } from "@reduxjs/toolkit";
import userSLlice from "./Red"

const store=configureStore({
    reducer:{
        custom:userSLlice,
    },
})

export default store;