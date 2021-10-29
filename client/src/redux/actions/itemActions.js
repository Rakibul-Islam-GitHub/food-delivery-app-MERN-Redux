import { ITEM_DETAILS_FAIL, ITEM_DETAILS_REQUEST, ITEM_DETAILS_SUCCESS, ITEM_LIST_FAIL, ITEM_LIST_REQUEST, ITEM_LIST_SUCCESS } from './itemActionType'
import axios from 'axios'

const getItems = ()=> async(dispatch)=> {
    try {
        dispatch({type:ITEM_LIST_REQUEST})
        const {data} = await axios.get('/api/products')
        // console.log('from item action: ',data)
        dispatch({type:ITEM_LIST_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({
            type:ITEM_LIST_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

/// item details by their ID
const getItemDetails = (id)=> async(dispatch)=> {
    try {
        dispatch({type:ITEM_DETAILS_REQUEST})
        const {data} = await axios.get(`/api/products/${id}`)
        
        dispatch({type:ITEM_DETAILS_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({
            type:ITEM_DETAILS_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export {getItems, getItemDetails}