import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ThemeState{
    theme: string
}

const initialState: ThemeState = {
    theme: 'light'
}


const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        }
    } 
})

export const { setTheme } = themeSlice.actions

export const getTheme = (state:RootState) => state.theme

export default themeSlice.reducer