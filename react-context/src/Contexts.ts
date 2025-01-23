import { createContext, Dispatch, SetStateAction } from "react";

export const CountContext = createContext<{ count: number; setCount: Dispatch<SetStateAction<number>> }>({ count: 0, setCount: () => { } });

export const ThemeContext1 = createContext<{ theme: string; setTheme: Dispatch<SetStateAction<string>> }>({ theme: "Light", setTheme: () => { } });

export const ThemeContext2 = createContext<{ theme: string; setTheme: Dispatch<SetStateAction<string>> } | null>(null);

export const ThemeContext3 = createContext<{ theme: string; dispatchTheme: Dispatch<string> } | null>(null);

