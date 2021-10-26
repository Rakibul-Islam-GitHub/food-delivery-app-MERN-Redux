import { ITEM_ADD_TO_CART, ITEM_REMOVE_FROM_CART } from "../actions/cartActionTypes"

const initialState= {
    cartItems:[]
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
            return {...state, cart:action.payload}
        case ITEM_REMOVE_FROM_CART:
            return {...state, cart:action.payload} 
    
        default:
           return state
    }
}