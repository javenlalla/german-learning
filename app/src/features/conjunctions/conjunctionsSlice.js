import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from '@reduxjs/toolkit';

export const conjunctionsEntityAdapter = createEntityAdapter();

export const fetchConjunctions = createAsyncThunk(
  'conjunctions/fetchConjunctions',
  async (thunkApi) => {
    return await fetch('conjunctions.json')
      .then(response => response.json())
  }
)

export const reducers = {};

const ConjunctionsSlice = createSlice({
  name: 'conjunctions',
  initialState: conjunctionsEntityAdapter.getInitialState(),
  reducers: reducers,
  extraReducers: (builder) => {
    builder.addCase(fetchConjunctions.fulfilled, (state, action) => {
      conjunctionsEntityAdapter.addMany(state, action.payload);
    })
  }
});

export const {} = ConjunctionsSlice.actions;

export const {
  selectAll: selectAllConjunctions,
} = conjunctionsEntityAdapter.getSelectors((state) => state.conjunctions);

// export const selectConjunctions = createSelector(
//   selectAllConjunctions,
//   (allConjunctions) => {
//     console.log(allConjunctions);
//     return allConjunctions;
//   }
// )

// export const selectFilteredTasks = createSelector(
//   selectAllTasks,
//   (allTasks) => {
//     const tasksInOrder = [
//       ...allTasks.filter((t) => t.state === 'TASK_PINNED'),
//       ...allTasks.filter((t) => t.state !== 'TASK_PINNED'),
//     ];

//     const filteredTasks = tasksInOrder.filter(
//       (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
//     );
//     return filteredTasks;
//   }
// )

export default ConjunctionsSlice.reducer;