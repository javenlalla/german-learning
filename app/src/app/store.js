import { configureStore } from '@reduxjs/toolkit'
// import listReducer from '../features/pokemon/listSlice'
// import typesReducer from '../features/pokemon/typesSlice'
// import searchReducer from '../features/pokemon/searchSlice'
// import conjunctionsReducer from '../features/conjunctions/conjunctionsSlice'
import vokabularSlice from "../features/vokabular/vokabularSlice";

export const store = configureStore({
  reducer: {
    // conjunctions: conjunctionsReducer,
    vokabular: vokabularSlice,
    // list: listReducer,
    // types: typesReducer,
    // search: searchReducer,
  },
})