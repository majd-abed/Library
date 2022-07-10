import React, { useState, useContext } from "react";
import { books } from "../data";
const GlobalContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState(books);
  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};
export function useGlobal() {
  return useContext(GlobalContext);
}
export { ContextProvider, GlobalContext };
