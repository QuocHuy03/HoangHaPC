import { createContext, useState } from "react";
import { useSelector } from "react-redux";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const { carts } = useSelector((state) => state.cart);

  return (
    <AppContext.Provider
      value={{
        carts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
