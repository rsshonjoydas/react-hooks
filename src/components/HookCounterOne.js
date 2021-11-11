import { useEffect, useState } from 'react';

const HookCounterOne = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You Clicked ${count} times`;
  });

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click {count} times
      </button>
    </div>
  );
};

export default HookCounterOne;
