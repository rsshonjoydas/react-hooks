import { useState } from 'react';

const HookCouner = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Hook Count - {count}
      </button>
    </div>
  );
};

export default HookCouner;
