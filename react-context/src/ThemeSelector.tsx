import { ThemeContext1 } from "./Contexts";
import { useContext } from "react";
import { useThemeContext2, useThemeContext3 } from "./useThemeContext";

export function ThemeSelector1() {
  const { theme, setTheme } = useContext(ThemeContext1);

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme("Light")}>Light</button>
      <button onClick={() => setTheme("Dark")}>Dark</button>
    </div>
  );
}

export function ThemeSelector2() {
  const { theme, setTheme } = useThemeContext2();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme("Light")}>Light</button>
      <button onClick={() => setTheme("Dark")}>Dark</button>
    </div>
  );
}

export function ThemeSelector3() {
  const { theme, dispatchTheme } = useThemeContext3();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => dispatchTheme("Light")}>Light</button>
      <button onClick={() => dispatchTheme("Dark")}>Dark</button>
    </div>
  );
}
