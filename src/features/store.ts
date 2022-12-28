import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from '../features/countries/countriesSlice'
import themeReducer from '../features/theme/themeSlice'

export const store = configureStore({
    reducer: {
        countries: countriesReducer,
        theme: themeReducer
    },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store