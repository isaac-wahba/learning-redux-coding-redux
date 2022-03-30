// Import createStore and combineReducers here.
import { createStore, combineReducers } from 'redux'
// Import the slice reducers here.
import { cartReducer } from '../features/cart/cartSlice'
import { inventoryReducer } from '../features/inventory/inventorySlice'
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice'
import { searchTermReducer } from '../features/searchTerm/searchTermSlice'
// Create and export the store here.

const reducer = combineReducers({ cart: cartReducer, inventory: inventoryReducer, currencyFilter: currencyFilterReducer, searchTerm: searchTermReducer })

export const store = createStore(reducer)