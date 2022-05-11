import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTypeFilter, getSelectedTypes } from './features/pokemon/typesSlice';
import List from './features/pokemon/List';
import Search from './features/pokemon/Search';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';

function App() {
  const availableTypes = ["Normal", "Fire", "Grass", "Water", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon"]
  const selectedTypes = useSelector(state => state.types.selectedTypes);
  const dispatch = useDispatch();
  
  const TypeFilters = ({ value: types, onChange }) => {
    const renderedTypes = availableTypes.map((type) => {
      const checked = types.includes(type)
      const handleChange = () => {
        const changeType = checked ? 'removed' : 'added'
        onChange(type, changeType)
      }

      return (
        <div className="form-check" key={type}>
          <input
            className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value={type}
            name={type}
            id={`checkbox-${type}`}
            onChange={handleChange}
            checked={checked}
          />
          <label className="form-check-label inline-block text-gray-800" htmlFor={`checkbox-${type}`}>
            {type}
          </label>
        </div>
      )
    })

    return (
      <div className="filters colorFilters">
        <div className="flex justify-center">
          <div>
            <h4>Filter by Type</h4>
            {renderedTypes}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <TypeFilters value={selectedTypes} onChange={(type) => dispatch(updateTypeFilter(type))} />
      <Search />
      <List />
    </div>
  );
}

export default App;
