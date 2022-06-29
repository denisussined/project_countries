import {configureStore} from "@reduxjs/toolkit";
import mainReducer from "./mainReducer";

const store = configureStore({
    reducer: {
        mainData: mainReducer
    }
})

export default store