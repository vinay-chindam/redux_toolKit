import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice'
import userReducer from './UserSlice'
import themeReducer from './ThemeSlice'


const store=configureStore({
    reducer:{
        cart:cartReducer,
        user:userReducer,
        theme:themeReducer,
    }
})

export default store;