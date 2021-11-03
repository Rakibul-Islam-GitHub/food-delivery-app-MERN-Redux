import axios from 'axios'
import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_HISTORY_FAIL, ORDER_HISTORY_REQUEST, ORDER_HISTORY_SUCCESS, PAYMENT_FAIL, PAYMENT_REQUEST, PAYMENT_SUCCESS } from './orderActionTypes'

export const createOrder = (order)=> async(dispatch, getState)=> {
    try {
        dispatch({type:CREATE_ORDER_REQUEST})
        
        const loggedInUser= getState().user.userInfo
        
        const headers={
            'Content-type' : 'application/json',
            Authorization: `Bearer ${loggedInUser.token}`
        }
        const {data} = await axios.post('/api/orders', order, {headers})
        
        dispatch({type:CREATE_ORDER_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({
            type:CREATE_ORDER_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}



/// GET ORDER DETAILS BY ORDER ID
export const getOrderDetails = (orderId)=> async(dispatch, getState)=> {
    try {
        dispatch({type:ORDER_DETAILS_REQUEST})

        const loggedInUser= getState().user.userInfo
        const headers={
            
            Authorization: `Bearer ${loggedInUser.token}`
        }
        const {data} = await axios.get(`/api/orders/${orderId}`, {headers})
        dispatch({type:ORDER_DETAILS_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({
            type:ORDER_DETAILS_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}



/// GET ORDER HISTORY BY LOGGEDIN USER
export const myOrderHistory = ()=> async(dispatch,getState)=> {
    try {
        dispatch({type:ORDER_HISTORY_REQUEST})

        const loggedInUser= getState().user.userInfo
        const headers={
            
            Authorization: `Bearer ${loggedInUser.token}`
        }
        const {data} = await axios.get(`/api/orders`, {headers})
        dispatch({type:ORDER_HISTORY_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({
            type:ORDER_HISTORY_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}



/// PAYMENT ACTION
export const makePayment = (orderId)=> async(dispatch,getState)=> {
    try {
        dispatch({type:PAYMENT_REQUEST})

        const loggedInUser= getState().user.userInfo
        
        const headers={
            
            Authorization: `Bearer ${loggedInUser.token}`
        }
        const {data} = await axios.put(`/api/orders/${orderId}`, {orderId: orderId} , {headers})
        dispatch({type:PAYMENT_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({
            type:PAYMENT_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}