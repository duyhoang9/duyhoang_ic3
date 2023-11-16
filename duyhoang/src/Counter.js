
import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0); 

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrementCount = () => {
    // So the count cannot go below zero, no negative numbers 
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <button className="counter-button" onClick={decrementCount}>-</button>
      <span className="counter-value">{count}</span>
      <button className="counter-button" onClick={incrementCount}>+</button>
    </div>
  );
};

export default Counter;
