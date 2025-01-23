import { ThemeContext2, ThemeContext3, } from "./Contexts";
import { useContext } from "react";

export function useThemeContext2() {
  const myThemeContext2 = useContext(ThemeContext2);
  if (!myThemeContext2) {
    return {
      theme: "Light",
      setTheme: () => { },
    };
  }
  return myThemeContext2;
}

export function useThemeContext3() {
  const myThemeContext3 = useContext(ThemeContext3);
  if (!myThemeContext3) {
    return {
      theme: "Light",
      dispatchTheme: () => { },
    };
  }
  return myThemeContext3;
}
