import { ITEM_DETAILS_FAIL, ITEM_DETAILS_REQUEST, ITEM_DETAILS_SUCCESS, ITEM_LIST_FAIL, ITEM_LIST_REQUEST, ITEM_LIST_SUCCESS } from "../actions/itemActionType";


const initialState={
    items:[]
}

export const itemListReducer=(state=initialState, action) => {
    switch (action.type) {
      case ITEM_LIST_REQUEST:
        return { loading: true, items: [] };
      case ITEM_LIST_SUCCESS:
        return { loading: false, items: action.payload };
      case ITEM_LIST_FAIL:
        return { loading: false, error: action.payload };

      default:
        return state;
    }
}

export const itemDetailsReducer=(state={item:{reviews:[]}}, action) => {
    switch (action.type) {
      case ITEM_DETAILS_REQUEST:
        return { loading: true, ...state };
      case ITEM_DETAILS_SUCCESS:
        return { loading: false, item: action.payload };
      case ITEM_DETAILS_FAIL:
        return { loading: false, error: action.payload };

      default:
        return state;
    }
}