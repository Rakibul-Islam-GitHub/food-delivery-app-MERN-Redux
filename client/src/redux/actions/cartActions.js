import { ITEM_ADD_TO_CART, ITEM_REMOVE_FROM_CART, SAVE_SHIPPING_ADDRESS } from "./cartActionTypes"
import axios from "axios"


export const addToCart= (id, quantity) => async(dispatch, getState) => {

   const {data} = await axios.get(`/api/products/${id}`)
//    const user= JSON.parse(localStorage.getItem('userInfo'))

         dispatch({
             type: ITEM_ADD_TO_CART, 
             payload: { 
                 id: data._id, 
                 name: data.name, 
                 image: data.image, 
                 price: data.price, 
                 countInStock: data.countInStock, 
                 quantity,
                 user: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,

             } 
            });

            localStorage.setItem('foodcart', JSON.stringify(getState().cart.cartItems))
        
    
}

/// remove from the cart

export const removeFromCart= (id) => async(dispatch, getState) => {

    
         dispatch({
              type: ITEM_REMOVE_FROM_CART, 
              payload: { 
                  id: id
                 
 
              } 
             });
 
             localStorage.setItem('foodcart', JSON.stringify(getState().cart.cartItems))
         
     
 }


 /// save shipping address information to localStorage
 export const AddShippingAddress= (address, city, postalCode, phone) => async(dispatch, getState) => {

    
    dispatch({
         type: SAVE_SHIPPING_ADDRESS, 
         payload: { 
             address: address, 
             city: city, 
             postalCode: postalCode, 
             phone: phone
            

         } 
        });

        localStorage.setItem('shippingAddress', JSON.stringify(getState().cart.shippingAddress))
    

}