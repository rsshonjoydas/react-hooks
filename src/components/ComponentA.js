/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import { CountContext } from '../App';

const ComponentA = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h2>Component A {countContext.countState} </h2>
      <button type="button" onClick={() => countContext.countDispatch('increment')}>
        Increment
      </button>
      <button type="button" onClick={() => countContext.countDispatch('decrement')}>
        Decrement
      </button>
      <button type="button" onClick={() => countContext.countDispatch('reset')}>
        Reset
      </button>
    </div>
  );
};

export default ComponentA;
