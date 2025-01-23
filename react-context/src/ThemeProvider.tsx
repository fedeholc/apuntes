import { ThemeContext1, ThemeContext2, ThemeContext3 } from "./Contexts";
import { useState, useEffect, useReducer } from "react";

export function ThemeProvider1({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext1.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext1.Provider>
  );
}

export function ThemeProvider2({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext2.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext2.Provider>
  );
}

export function ThemeProvider3({ children }: { children: React.ReactNode }) {
  function themeReducer(state: string, action: string) {
    switch (action) {
      case "Light":
        return "Light";
      case "Dark":
        return "Dark";
      default:
        return state;
    }
  }

  const savedTheme = localStorage.getItem("theme") || "light";

  const [theme, dispatchTheme] = useReducer(themeReducer, savedTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext3.Provider value={{ theme, dispatchTheme }}>
      {children}
    </ThemeContext3.Provider>
  );
}
 
