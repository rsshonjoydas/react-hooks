import React from 'react';

const Title = () => {
  console.log('Rendering Title');
  return <h3>useCallback Hook</h3>;
};

export default React.memo(Title);
