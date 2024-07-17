import React, { useState } from "react";
import "./Counter.css";

const Counter = (props) => {
  const [counterValue, setCounterValue] = useState(0);

  const incrementHandler = () => {
    setCounterValue(counterValue + 1);
  };

  const decrementHandler = () => {
    if (counterValue === 0) {
      setCounterValue(counterValue);
    } else {
      setCounterValue(counterValue - 1);
    }
  };

  return (
    <div className="main">
      <h1>{props.itemName}</h1>
      <h1 className={counterValue === 0 ? "zero" : "non-zero"}>
        {counterValue}
      </h1>
      <button onClick={incrementHandler}>Increment</button>{" "}
      {
        counterValue === 0 ? (
          <h1>Counter is Zero</h1>
        ) : (
          <button onClick={decrementHandler}>Decrement</button>
        ) /* calling function reference */
      }
      <button onClick={props.removeHandler}>Remove Item</button>
    </div>
  );
};

export default Counter;
