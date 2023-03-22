import { createSlice, configureStore } from "@reduxjs/toolkit";


const getFlags = createSlice({
    name: 'flags',
    initialState: {
        selectCountry: 'https://restcountries.com/v3.1/all',
        searchName: '',
        mode: false
    },
    reducers: {

        filterData(state, action) {
            const region = action.payload;
            state.selectCountry = `https://restcountries.com/v3.1/region/${region}`
        },
        searchData(state, action) {
            const name = action.payload;
            state.searchName = name;
        },
        switchMode(state){
            state.mode = !state.mode
  
        }
    }
})

const store = configureStore({
    reducer: getFlags.reducer
})

export const getFlagsAcitions = getFlags.actions

export default store;