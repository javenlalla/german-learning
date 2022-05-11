import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchTerm } from './searchSlice';

export default function Search() {
  const dispatch = useDispatch();
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {dispatch(updateSearchTerm(e.target.value))}}
      />
    </div>
  )
}