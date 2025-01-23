import { useContext } from "react";
import { CountContext } from "./Contexts";

export default function Counter() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>increase</button>
    </div>
  );
}
