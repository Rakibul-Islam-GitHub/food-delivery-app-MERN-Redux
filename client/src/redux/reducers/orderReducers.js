import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_RESET, CREATE_ORDER_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_HISTORY_FAIL, ORDER_HISTORY_REQUEST, ORDER_HISTORY_SUCCESS, PAYMENT_FAIL, PAYMENT_REQUEST, PAYMENT_SUCCESS } from "../actions/orderActionTypes";


export const orderReducer= (state={success:false, orderDetails:{}}, action) => {

    switch (action.type) {
      case CREATE_ORDER_REQUEST:
        return {
          loading: true,
        };
      case CREATE_ORDER_SUCCESS:
        return {
          loading: false,
          success: true,
          orderDetails: action.payload

        };

      case CREATE_ORDER_FAIL:
        return {
          loading: false,
          error: action.payload
        };
        case CREATE_ORDER_RESET:
          return {
            
          };

      default:
        return state;
    }

}


/// order details by orderID reducers
export const orderDetailsReducer=(state={loading: true, orderById:{}}, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { loading: true, ...state };
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, orderById: action.payload };
    case ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}


/// order history by loggedin user reducers
export const orderHistoryReducer=(state={ orderHistory:[]}, action) => {
  switch (action.type) {
    case ORDER_HISTORY_REQUEST:
      return { loading: true, ...state };
    case ORDER_HISTORY_SUCCESS:
      return { loading: false, orderHistory: action.payload };
    case ORDER_HISTORY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}



/// ppayment reducer
export const paymentReducer=(state={ isPaid: false}, action) => {
  switch (action.type) {
    case PAYMENT_REQUEST:
      return { loading: true, ...state };
    case PAYMENT_SUCCESS:
      return { loading: false, isPaid:true };
    case PAYMENT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}