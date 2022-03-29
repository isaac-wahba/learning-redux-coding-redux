import { createStore, combineReducers } from 'redux';
import { allRecipesReducer } from '../features/allRecipes/allRecipesSlice'
import { favoriteRecipesReducer } from '../features/favoriteRecipes/favoriteRecipesSlice'
import { searchTermReducer } from '../features/searchTerm/searchTermSlice'


// const initialState = {
//     allRecipes: [],
//     favoriteRecipes: [],
//     searchTerm: ''
// };



// Create your `rootReducer` here using combineReducers().
let reducers = { allRecipes: allRecipesReducer, favoriteRecipes: favoriteRecipesReducer, searchTerm: searchTermReducer }

let rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);

