import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
}

export const searchReducers = {
  updateSearchTerm: (state, action) => {
    state.searchTerm = action.payload.toLowerCase();
  }
}

export const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: searchReducers,
})

export const { updateSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;