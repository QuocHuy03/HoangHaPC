import { ORDER_FAILED, ORDER_SUCCESS } from "./types";

const initialState = {
  orders: null,
  loading: false,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_SUCCESS:
      return {
        ...state,
        orders: action.payload,
      };

    case ORDER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return initialState;
  }
};

export default orderReducer;
