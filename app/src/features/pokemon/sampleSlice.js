import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  sampleValues: [
    "value One",
    "value Two",
  ],
}

export const sampleSlice = createSlice({
  name: "sample",
  initialState: initialState,
  reducers: {
    updateSampleValues: (state, action) => {
      state.sampleValues = action.payload;
    }
  }
})

export const { updateSampleValues } = sampleSlice.actions;

// See the following sample code in order to leverage this Selector.
//
// import { useSelector, useDispatch } from 'react-redux';
// const words = useSelector(selectSampleValues);
export const selectSampleValues = createSelector(
  (state) => state.sample.sampleValues, // Initial input. Add more inputs as necessary.
  (valuesFromPreviousInput) => valuesFromPreviousInput, // Output.
)

// After exporting, update the `store` to include this reducer.
//
// Example:
//import { configureStore } from '@reduxjs/toolkit'
//import sampleReducer from '../features/sample/sampleSlice'
//
//export const store = configureStore({
//  reducer: {
//    sample: sampleReducer,
//  },
//})
export default sampleSlice.reducer;