import { createContext, useState } from "react";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isOpenModal,
        setIsOpenModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
