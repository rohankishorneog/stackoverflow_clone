import React, { createContext, useState, useEffect, useContext } from "react";

interface ThemeContextType {
  mode: String;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("");

  const handleThemeChange = () => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.add("dark");
    } else {
      setMode("dark");
      document.documentElement.classList.add("light");
    }
  };

  // setting useEffect to use it when the app starts and everytime when the mode changes
  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

// function for utilisation of theme context

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within an Themeprovide");
  }

  return context;
};
