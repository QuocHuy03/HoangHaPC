import {
  ADD_TO_CART,
  DECREASE_QUANTIRY_CART,
  INCREASING_QUANTIRY_CART,
  REMOVE_ALL_CART,
  REMOVE_CART,
} from "./types";

const initialState = {
  carts: [],
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { product, color, quantity } = action.payload;
      const existingProduct = state.carts.find(
        (item) => item.product._id === product._id
      );
      const newQuantity = parseInt(quantity);

      if (existingProduct) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng mới
        existingProduct.quantity += newQuantity;
        return { ...state };
      } else {
        // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm mới
        const newProduct = {
          product: product,
          color: color,
          quantity: newQuantity,
        };
        return { ...state, carts: [...state.carts, newProduct] };
      }
    case REMOVE_CART:
      const productToRemove = action.payload;
      const updatedCarts = state.carts.filter(
        (item) => item.product._id !== productToRemove.product._id
      );
      return { ...state, carts: updatedCarts };

    case DECREASE_QUANTIRY_CART:
      const productToDecrease = action.payload;
      const updatedCartsDecrease = state.carts.map((item) => {
        if (
          item.product._id === productToDecrease.product._id &&
          item.quantity > 1
        ) {
          item.quantity -= 1;
        }
        return item;
      });
      return { ...state, carts: updatedCartsDecrease };

    case INCREASING_QUANTIRY_CART:
      const productToIncrease = action.payload;
      const updatedCartsIncrease = state.carts.map((item) => {
        if (item.product._id === productToIncrease.product._id) {
          item.quantity += 1;
        }
        return item;
      });
      return { ...state, carts: updatedCartsIncrease };

    case REMOVE_ALL_CART:
      return { ...state, carts: [] };

    default:
      return state;
  }
};

export default cartReducer;
