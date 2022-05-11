import { createSlice, createEntityAdapter, createAsyncThunk, createSelector } from '@reduxjs/toolkit'

export const pokemonAdapter = createEntityAdapter();
// const typesAdapter = createEntityAdapter(["Fire", "Water"]);

export const fetchPokemon = createAsyncThunk(
  'list/fetchPokemon',
  async (thunkApi) => {
    return await fetch('pokemon.json')
      .then(response => response.json())
  }
)

export const listReducers = {
  increment: (state) => {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    state.value += 1
  },
  decrement: (state) => {
    state.value -= 1
  },
  incrementByAmount: (state, action) => {
    state.value += action.payload
  },
  removePokemon: (state, action) => {
    pokemonAdapter.removeOne(state, action.payload);
  }
}

export const listSlice = createSlice({
  name: 'list',
  initialState: pokemonAdapter.getInitialState(),
  reducers: listReducers,
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      pokemonAdapter.addMany(state, action.payload)
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, removePokemon } = listSlice.actions

export const {
  // selectById: selectUserById,
  // selectIds: selectUserIds,
  // selectEntities: selectUserEntities,
  selectAll: selectAllPokemon,
  // selectTotal: selectTotalUsers,
  // removeOne: removeOnePokemon,
} = pokemonAdapter.getSelectors((state) => state.list)

// export const {
//   // selectById: selectUserById,
//   // selectIds: selectUserIds,
//   // selectEntities: selectUserEntities,
//   selectAll: selectAllTypes,
//   // selectTotal: selectTotalUsers,
//   // removeOne: removeOnePokemon,
// } = typesAdapter.getSelectors((state) => { console.log(state); return state.types})

export const selectFilteredPokemon = createSelector(
  selectAllPokemon,
  (state) => state.types.selectedTypes,
  (state) => state.search.searchTerm,
  (pokemon, filterByTypes, searchTerm) => {
    if (filterByTypes.length === 0 && searchTerm.length === 0) {
      return pokemon
    }

    let filteredPokemon = [];
    for (let i = 0; i < pokemon.length; i++) {
      if (filterByTypes.length > 0 && (pokemon[i].typeOne === filterByTypes[0] || pokemon[i].typeTwo === filterByTypes[0])) {
        filteredPokemon.push(pokemon[i]);
      } 

      if (searchTerm.length > 0 && pokemon[i].name.toLowerCase().includes(searchTerm)) {
        filteredPokemon.push(pokemon[i]);
      }
    }

    return filteredPokemon
  }
)

export default listSlice.reducer