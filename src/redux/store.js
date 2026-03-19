import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice'
import userReducer from './UserSlice'
import themeReducer from './ThemeSlice'
import counterReducer from './CounterSlice'


const store=configureStore({
    reducer:{
        cart:cartReducer,
        user:userReducer,
        theme:themeReducer,
        counter:counterReducer,
    }
})

export default store;