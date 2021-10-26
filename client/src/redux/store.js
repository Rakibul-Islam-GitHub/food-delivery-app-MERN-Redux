import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { itemDetailsReducer, itemListReducer } from './reducers/itemReducers'
import { cartReducers } from './reducers/cartReducers'

const reducer= combineReducers({
  itemList: itemListReducer,
  itemDetails : itemDetailsReducer,
  cart : cartReducers
})
const cartFromLocalStorage = localStorage.getItem('foodcart') ? 
JSON.parse(localStorage.getItem('foodcart')) : []

const initialState ={
    cart: {cartItems: cartFromLocalStorage}
}
const middleware = [thunk]

const store= createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
