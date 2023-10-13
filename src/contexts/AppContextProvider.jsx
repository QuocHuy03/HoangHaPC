import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../stores/cart/actions";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const { orders } = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(getCart(user?._id));
  }, []);
  return (
    <AppContext.Provider
      value={{
        carts,
        user,
        order: orders,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
