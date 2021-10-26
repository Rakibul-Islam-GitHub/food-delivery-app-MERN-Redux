import { ITEM_ADD_TO_CART, ITEM_REMOVE_FROM_CART } from "./cartActionTypes"
import axios from "axios"


export const addToCart= (id, quantity) => async(dispatch, getState) => {

   const {data} = await axios.get(`/api/products/${id}`)
        dispatch({
             type: ITEM_ADD_TO_CART, 
             payload: { 
                 id: data._id, 
                 name: data._name, 
                 image: data.image, 
                 price: data.price, 
                 countInStock: data.countInStock, 
                 quantity

             } 
            });

            localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
        
    
}