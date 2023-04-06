import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="counterContainer">
      <h2>Counter</h2>
      <p className="counter">{count}</p>
      <div>
        <button style={{ marginRight: "10px" }} onClick={incrementCount}>
          +
        </button>
        <button style={{ marginRight: "10px" }} onClick={decrementCount}>
          -
        </button>
        <button className="btn-counter" onClick={resetCount}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
