import React from 'react';
import useCounter from '../Hook/useCounter';

const CounterOne = () => {
  const [count, increment, decrement, reset] = useCounter(0, 1);

  return (
    <div>
      <h2>Count One - {count} </h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default CounterOne;
