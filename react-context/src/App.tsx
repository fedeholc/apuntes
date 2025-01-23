import { useState } from "react";
import "./App.css";
import { CountContext } from "./Contexts";
import Counter from "./Counter";
import {
  ThemeSelector1,
  ThemeSelector2,
  ThemeSelector3,
} from "./ThemeSelector";
import {
  ThemeProvider1,
  ThemeProvider2,
  ThemeProvider3,
} from "./ThemeProvider";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Ejemplos </h1>
      <CountContext.Provider value={{ count, setCount }}>
        <Counter />
      </CountContext.Provider>
      <ThemeProvider1>
        <h1>Theme Example 1</h1>
        <ThemeSelector1 />
      </ThemeProvider1>
      <ThemeProvider2>
        <h1>Theme Example 2</h1>
        <ThemeSelector2 />
      </ThemeProvider2>
      <ThemeProvider3>
        <h1>Theme Example 3</h1>
        <ThemeSelector3 />
      </ThemeProvider3>
    </>
  );
}

export default App;
