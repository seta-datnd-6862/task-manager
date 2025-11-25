import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Create Theme Context
const ThemeContext = createContext();

/**
 * ThemeProvider component
 * Provides theme state and toggle function to all children
 */
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to use theme context
 * Throws error if used outside ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
