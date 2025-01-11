import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    console.log(newDarkTheme, isDarkTheme);
    setIsDarkTheme(newDarkTheme);
  };

  return <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
