import React, { useState } from 'react';
import useDocumentTitle from '../Hook/useDocumentTitle';

const DocTitleTwo = () => {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        Count - {count}
      </button>
    </div>
  );
};

export default DocTitleTwo;
