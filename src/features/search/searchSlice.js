import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        setSearch: (state, action) => (state = action.payload),
        clearSearch: (state) => (state = '')
    }
})

export const { setSearch, clearSearch } = searchSlice.actions;

export const selectedSearch = (state) => state.search;

export default searchSlice.reducer;