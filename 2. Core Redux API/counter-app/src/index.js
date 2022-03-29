import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'

// ! REDUX CODE

//? Actions Creators:

export const increment = () => {
  return { type: 'increment' }
}

export const decrement = () => {
  return { type: 'decrement' }
}

//? Initial State
const initialState = 0;

//? Reducer: 

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

//? Store:
export const store = createStore(counterReducer);

// ! React Code

const render = () => ReactDOM.render(
  <React.StrictMode>
    <App state={store.getState()}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
render();
store.subscribe(render);

