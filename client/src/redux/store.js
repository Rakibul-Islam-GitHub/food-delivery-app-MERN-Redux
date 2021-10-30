import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { itemDetailsReducer, itemListReducer } from './reducers/itemReducers'
import { cartReducers } from './reducers/cartReducers'
import { userReducer, userRegisterReducer } from './reducers/userReducers'

const reducer= combineReducers({
  itemList: itemListReducer,
  itemDetails : itemDetailsReducer,
  cart : cartReducers,
  user : userReducer,
  register : userRegisterReducer
})
const cartFromLocalStorage = localStorage.getItem('foodcart') ? 
JSON.parse(localStorage.getItem('foodcart')) : []

const userFromLocalStorage = localStorage.getItem('userInfo') ? 
JSON.parse(localStorage.getItem('userInfo')) : null

const initialState ={
    cart: {cartItems: cartFromLocalStorage},
    user: {userInfo: userFromLocalStorage}
}
const middleware = [thunk]

const store= createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
