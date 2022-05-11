import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removePokemon, selectFilteredPokemon, fetchPokemon } from './listSlice';

export default function List() {
    const pokemons = useSelector(selectFilteredPokemon)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPokemon())
    }, [])

    const listRender = pokemons.map( pokemon => {
        return <tr className="bg-white border-b" key={pokemon.id}>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {pokemon.name}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {pokemon.typeOne}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {pokemon.typeTwo}
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" onClick={() => dispatch(removePokemon(pokemon.id))}>
            Delete {pokemon.id}
          </td>
        </tr>
    })

    return (
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Name
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Type One
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Type Two
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
              {listRender}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    );
};