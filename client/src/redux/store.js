import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { itemDetailsReducer, itemListReducer } from './reducers/itemReducers'
import { cartReducers } from './reducers/cartReducers'
import { json } from 'express'

const reducer= combineReducers({
  itemList: itemListReducer,
  itemDetails : itemDetailsReducer,
  cart : cartReducers
})
const cartFromLocalStorage = localStorage.getItem('cart') ? 
JSON.parse(localStorage.getItem('cart')) : []

const initialState ={
    cart: {cartItems: cartFromLocalStorage}
}
const middleware = [thunk]

const store= createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
