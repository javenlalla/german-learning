import { createSlice, createEntityAdapter, createAsyncThunk, current } from '@reduxjs/toolkit'

const initialState = {
  selectedTypes: [],
}

export const typesReducers = {
  updateTypeFilter: (state, action) => {
    const selectedType = action.payload;
    const { selectedTypes } = state;

    if (!selectedTypes.includes(selectedType)) {
      selectedTypes.push(selectedType)
    } else {
      state.selectedTypes = selectedTypes.filter(
        (existingType) => existingType !== selectedType
      )
    }
  }
}

export const typesSlice = createSlice({
  name: 'types',
  initialState: initialState,
  reducers: typesReducers,
  // extraReducers: (builder) => {
  //   builder.addCase(fetchPokemon.fulfilled, (state, action) => {
  //     // Add user to the state array
  //     pokemonAdapter.addMany(state, action.payload)
  //   })
  // }
})

// Action creators are generated for each case reducer function
export const { updateTypeFilter } = typesSlice.actions

export default typesSlice.reducer