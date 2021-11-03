import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { itemDetailsReducer, itemListReducer } from './reducers/itemReducers'
import { cartReducers } from './reducers/cartReducers'
import { userReducer, userRegisterReducer } from './reducers/userReducers'
import { orderDetailsReducer, orderHistoryReducer, orderReducer, paymentReducer } from './reducers/orderReducers'

const reducer= combineReducers({
  itemList: itemListReducer,
  itemDetails : itemDetailsReducer,
  cart : cartReducers,
  user : userReducer,
  register : userRegisterReducer,
  order : orderReducer,
  orderDetails : orderDetailsReducer,
  orderHistory: orderHistoryReducer,
  payment: paymentReducer,
})
const cartFromLocalStorage = localStorage.getItem('foodcart') ? 
JSON.parse(localStorage.getItem('foodcart')) : []

const userFromLocalStorage = localStorage.getItem('userInfo') ? 
JSON.parse(localStorage.getItem('userInfo')) : null

const shippingFromLocalStorage = localStorage.getItem('shippingAddress') ? 
JSON.parse(localStorage.getItem('shippingAddress')) : {}

const initialState ={
    cart: {cartItems: cartFromLocalStorage, shippingAddress: shippingFromLocalStorage },
    user: {userInfo: userFromLocalStorage}
}
const middleware = [thunk]

const store= createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
