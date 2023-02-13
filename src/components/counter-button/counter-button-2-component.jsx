import React, { useState } from "react";
import "./counter-button.styles.css";

const CounterButton2 = () => {
  const [count, setCount] = useState(0);
  const handleCounterClick = () => {
    setCount(count + 1);
  };

  return (
    <button id="counter" onClick={handleCounterClick}>
      Count: {count}
    </button>
  );
};

export default CounterButton2;
