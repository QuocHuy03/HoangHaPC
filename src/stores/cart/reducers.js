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
      const { product, quantity } = action.payload;
      if (product) {
        // Kiểm tra xem product đã tồn tại hay chưa
        const existingProduct = state.carts.find(
          (item) => item._id === product._id
        );
        const newQuantity = parseInt(quantity);
        if (existingProduct) {
          // CẬP NHẬT SỐ LƯỢNG MỚI CHO SẢN PHẨM ĐÃ TỒN TẠI
          existingProduct.quantity += newQuantity;
        } else {
          // THÊM SẢN PHẨM MỚI
          state.carts.push({ ...product, quantity: newQuantity });
        }
      }
      return { ...state };

    case REMOVE_CART:
      const productToRemove = action.payload;
      state.carts = state.carts.filter(
        (item) => item._id !== productToRemove._id
      );
      return { ...state };

    case DECREASE_QUANTIRY_CART:
      const productToDecrease = action.payload;
      const existingProductToDecrease = state.carts.find(
        (item) => item._id === productToDecrease._id
      );
      if (existingProductToDecrease && existingProductToDecrease.quantity > 1) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng và số lượng của nó lớn hơn 1
        existingProductToDecrease.quantity -= 1; // Giảm số lượng của sản phẩm đi 1
      } else {
        // Nếu sản phẩm không tồn tại trong giỏ hàng hoặc số lượng của nó chỉ còn 1
        state.carts = state.carts.filter(
          (item) => item._id !== productToDecrease._id
        ); // Xóa sản phẩm khỏi giỏ hàng
      }
      return { ...state };

    case INCREASING_QUANTIRY_CART:
      const productToIncrease = action.payload;
      const existingProductToIncrease = state.carts.find(
        (item) => item._id === productToIncrease._id
      );
      if (existingProductToIncrease) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng
        existingProductToIncrease.quantity += 1; // Tăng số lượng của sản phẩm đi 1
      } else {
        // Nếu sản phẩm chưa tồn tại trong giỏ hàng
        state.carts.push({ ...productToIncrease, quantity: 1 }); // Thêm sản phẩm vào giỏ hàng với số lượng là 1
      }
      return { ...state };

    case REMOVE_ALL_CART:
      return initialState;

    default:
      return state;
  }
};

export default cartReducer;
