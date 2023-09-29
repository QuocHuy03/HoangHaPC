import { createContext, useState } from "react";
import { useSelector } from "react-redux";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const { carts } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  return (
    <AppContext.Provider
      value={{
        carts,
        user
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
