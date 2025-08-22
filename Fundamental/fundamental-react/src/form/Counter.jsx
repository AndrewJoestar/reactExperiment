import { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(`Counter: ${counter + 1}`);
        }}
      >
        Increment
      </button>
      <h1>Counter : {counter}</h1>
    </div>
  );
}
