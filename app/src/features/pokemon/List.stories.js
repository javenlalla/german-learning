import React from 'react';
import List from './List';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { listReducers, pokemonAdapter } from './listSlice';
import { searchReducers } from './searchSlice';
import { typesReducers } from './typesSlice';

export const InitialMockedState = pokemonAdapter.getInitialState();
const DefaultState = pokemonAdapter.addMany(InitialMockedState, [
  {
    "id": 1,
    "name": "Bulbasaur",
    "typeOne": "Grass",
    "typeTwo": "Poison"
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "typeOne": "Grass",
    "typeTwo": "Poison"
  },
  {
    "id": 3,
    "name": "Venasaur",
    "typeOne": "Grass",
    "typeTwo": "Poison"
  }
]);

const Mockstore = ({ mockedState, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        list: createSlice({
          name: 'list',
          initialState: mockedState,
          reducers: listReducers,
        }).reducer,
        types: createSlice({
          name: 'types',
          initialState: {selectedTypes: ["Grass"]},
          reducers: typesReducers,
        }).reducer,
        search: createSlice({
          name: 'search',
          initialState: {searchTerm: ''},
          reducers: searchReducers,
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);


export default {
  component: List,
  title: 'Pokemon/List',
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  excludeStories: /.*InitialMockedState$/,
};

const Template = () => <List />;

export const Default = Template.bind({});
Default.decorators = [
  (story) => <Mockstore mockedState={DefaultState}>{story()}</Mockstore>,
];


// A super-simple mock of the state of the store
// export const MockedState = {
//   list: pokemonAdapter.getInitialState(),
//   types: {
//     selectedTypes: ["Fire", "Water"],
//   },
//   search: {
//     searchTerm: '',
//   },
//   // status: 'idle',
//   // error: null,
// };

// const Mockstore = ({ listState, children }) => (
//   <Provider
//     store={configureStore({
//       reducer: {
//         list: createSlice({
//           name: 'list',
//           initialState: listState,
//           reducers: {
//             // updateTaskState: (state, action) => {
//             //   const { id, newTaskState } = action.payload;
//             //   const task = state.tasks.findIndex((task) => task.id === id);
//             //   if (task >= 0) {
//             //     state.tasks[task].state = newTaskState;
//             //   }
//             // },
//           },
//         }).reducer,
//       },
//     })}
//   >
//     {children}
//   </Provider>
// );

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: 'Pokemon/List',
//   component: List,
//   excludeStories: /.*MockedState$/,
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
// //   argTypes: {
// //     backgroundColor: { control: 'color' },
// //   },
// };

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template = () => <List />;

export const Primary = Template.bind({});
Primary.decorators = [
  (story) => <Mockstore listState={DefaultState}>{story()}</Mockstore>,
];
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   defaultPokemon: [
//     {
//         id: 1,
//         name: "Charmander",
//         typeOne: "Fire",
//         typeTwo: null,
//     },
//     {
//         id: 2,
//         name: "Bublasaur",
//         typeOne: "Grass",
//         typeTwo: null,
//     },
//     {
//         id: 3,
//         name: "Squirtle",
//         typeOne: "Water",
//         typeTwo: null,
//     },
//     {
//         id: 4,
//         name: "Charmeleon",
//         typeOne: "Fire",
//         typeTwo: null,
//     }
//   ]
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'List',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'List',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'List',
// };
