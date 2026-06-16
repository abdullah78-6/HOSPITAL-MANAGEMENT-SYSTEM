import {configureStore} from "@reduxjs/toolkit";
import user from "./slice.js";
const ClientStore=configureStore({
    reducer:{
        main:user
    }
})
export default ClientStore;