import { createContext, useState } from "react";
import { useSelector } from "react-redux";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const { carts } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const { orders } = useSelector((state) => state.order);
  console.log("bên context", orders);
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
