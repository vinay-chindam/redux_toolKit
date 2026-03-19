import { createSlice } from "@reduxjs/toolkit"

const initialState={
    darkTheme:"dark"
}

const themeSlice=createSlice({
    name:"theme",
    initialState,
    reducers:{
        toggleTheme: (state) => {
  state.darkTheme = state.darkTheme === "white" ? "dark" : "white";
}
    }
})

export const {toggleTheme}=themeSlice.actions
export default themeSlice.reducer