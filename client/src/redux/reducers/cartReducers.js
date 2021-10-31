import { ITEM_ADD_TO_CART, ITEM_REMOVE_FROM_CART, SAVE_SHIPPING_ADDRESS } from "../actions/cartActionTypes"

const initialState= {
    cartItems:[],
    shippingAddress:{}
}
export const cartReducers= (state=initialState, action)=> {
    switch (action.type) {
        case ITEM_ADD_TO_CART:
            const item= action.payload
            const existItem= state.cartItems.find(x=> x.id=== item.id)
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x=> x.id=== existItem.id ? item : x)
                }
            }
            else{
                return {
                    ...state, 
                    cartItems: [...state.cartItems, item]
                }
            }
        case ITEM_REMOVE_FROM_CART:
            const filteredItems = state.cartItems.filter(item=> item.id !== action.payload.id)
            return { 
                ...state, 
                cartItems: filteredItems
            }
        
        case SAVE_SHIPPING_ADDRESS:
           
            return {
              ...state,
              shippingAddress: { 
                  address: action.payload.address, 
                  city: action.payload.city, 
                  postalCode: action.payload.postalCode,
                  phone: action.payload.phone,
              }
            };
    
        default:
           return state
    }
}