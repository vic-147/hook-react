import { useState, createContext } from "react";

const RickContext = createContext();

const RickProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // dark mode control
  const handleClickDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const value = {
    darkMode,
    handleClickDarkMode,
  };

  return <RickContext.Provider value={value}>{children}</RickContext.Provider>;
};

export { RickProvider, RickContext };
