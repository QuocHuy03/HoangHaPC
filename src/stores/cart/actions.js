import {
  ADD_CART_REQUEST,
  UPDATE_CART_REQUEST,
  REMOVE_CART_REQUEST,
  REMOVE_ALL_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_FAILED,
} from "./types";
import { cartService } from "../../services/cart.service";

export const addToCart = (data) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_CART_REQUEST,
      payload: data,
    });

    try {
      const response = await cartService.fetchPostCart(data);
      if (response.status === true) {
        dispatch({
          type: ADD_CART_SUCCESS,
          payload: response.result,
        });
        return {
          status: true,
          message: response.message,
        };
      } else {
        dispatch({
          type: ADD_CART_FAILED,
          payload: response,
        });
        return response;
      }
    } catch (error) {
      dispatch({
        type: ADD_CART_FAILED,
        payload: {
          status: false,
          message: error.message,
        },
      });
    }
  };
};

export const removeCartItem = (product) => ({
  type: REMOVE_CART,
  payload: product,
});

export const increaseQuantity = (product) => ({
  type: INCREASING_QUANTIRY_CART,
  payload: product,
});

export const decreaseQuantity = (product) => ({
  type: DECREASE_QUANTIRY_CART,
  payload: product,
});

export const removeAllCart = () => ({
  type: REMOVE_ALL_CART,
});
