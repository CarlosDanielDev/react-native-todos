import React, { createContext, useCallback, useState, useContext } from 'react';

import light from '../themes/light';
import dark from '../themes/dark';

interface ThemeContext {
  changeTheme?(): void;
  currentTheme: string;
  theme: typeof light;
}

const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const theme = currentTheme === 'dark' ? dark : light;

  const changeTheme = useCallback(() => {
    setCurrentTheme(previousState => previousState === 'dark' ? 'light' : 'dark');
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        changeTheme,
        currentTheme,
        theme
      }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useThemeContext(): ThemeContext {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext should be used with an ThemeProvider');
  }
  return context;
}

export { useThemeContext, ThemeProvider };