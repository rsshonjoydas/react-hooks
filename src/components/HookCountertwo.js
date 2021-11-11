/* eslint-disable no-plusplus */
import { useState } from 'react';

const HookCountertwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      Hook Count Two: {count}
      <button type="button" onClick={() => setCount(initialCount)}>
        Reset
      </button>
      <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button type="button" onClick={incrementFive}>
        Increment 5
      </button>
    </div>
  );
};

export default HookCountertwo;
