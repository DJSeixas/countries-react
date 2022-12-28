import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import countryApi from '../../api/countriesAPi'


export interface CountriesState {
    countries: Array<Object>
    filterCountries: Array<Object>
    selectCountry: Object
}

export const fetchAsyncCountries = createAsyncThunk(
    'countries/fetchAsyncCountries', 
    async () => {
    const response = await countryApi
            .get(`/all`);
            return response.data
})

export const fetchAsyncCountriesDetail = createAsyncThunk(
    'countries/fetchAsyncCountriesDetail', 
    async (name: string) => {
    const response = await countryApi
            .get(`/name/${name}`);
            return response.data
})

export const fetchAsyncCountriesSearch = createAsyncThunk(
    'countries/fetchAsyncCountriesSearch', 
    async (name: string) => {
    const response = await countryApi
            .get(`/name/${name}`);
            return response.data
})

export const fetchAsyncCountriesSelect = createAsyncThunk(
    'countries/fetchAsyncCountriesSelect', 
    async (region: string) => {
    const response = await countryApi
            .get(`/region/${region}`);
            return response.data
})


const initialState: CountriesState = {
    countries: [],
    filterCountries: [],
    selectCountry: {}
}

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        removeSelectedCountry: (state) => {
            state.selectCountry = {}
        },
        clearFilteredCountries: (state) => {
            state.filterCountries = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncCountries.pending, () => {
            console.log("Pending")
        })

        builder.addCase(fetchAsyncCountries.fulfilled, (state, {payload}) => {
                console.log("fetched successfully!")
                return {...state, countries: payload}  
        })

        builder.addCase(fetchAsyncCountries.rejected, () => {
            console.log("Rejected!")
        })

        builder.addCase(fetchAsyncCountriesDetail.fulfilled, (state, {payload}) => {
            console.log("fetched successfully!")
            state.selectCountry = payload
        })

        builder.addCase(fetchAsyncCountriesSearch.fulfilled, (state, {payload}) => {
            console.log("fetched successfully!")
            return { ...state, filterCountries: payload }
        })

        builder.addCase(fetchAsyncCountriesSelect.fulfilled, (state, {payload}) => {
            console.log("fetched successfully!")
            return { ...state, filterCountries: payload }
        })
    },
})

export const { removeSelectedCountry, clearFilteredCountries } = countriesSlice.actions;

export const getAllCountries = (state: RootState) => state.countries.countries

export const getSelectedCountry = (state: RootState) => state.countries.selectCountry

export const getFilterCountries = (state: RootState) => state.countries.filterCountries

export default countriesSlice.reducer;