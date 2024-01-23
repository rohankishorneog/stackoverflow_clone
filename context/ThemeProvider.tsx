"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

interface ThemeContextType {
  mode: String;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("");

  const handleThemeChange = () => {
    if (
      // first we check if the theme is dark or (if the theme
      // doesnot exist in local storage and the window matchmedia prefers the dark mode) in this case we set it to dark mode and add it to the class list
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };

  // setting useEffect to use it when the app starts and everytime when the mode changes
  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  console.log("mode: " + mode);

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
