import {
  ADD_TO_CART,
  DECREASE_QUANTIRY_CART,
  INCREASING_QUANTIRY_CART,
  REMOVE_ALL_CART,
  REMOVE_CART,
} from "./types";

export const addToCart = ({ product, color, quantity }) => ({
  type: ADD_TO_CART,
  payload: { product, color, quantity },
});

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
