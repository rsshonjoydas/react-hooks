import { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const CounterThree = () => {
  const [countOne, dispatchOne] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count One - {countOne}</h2>
      <button type="button" onClick={() => dispatchOne('increment')}>
        Increment
      </button>
      <button type="button" onClick={() => dispatchOne('decrement')}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatchOne('reset')}>
        Reset
      </button>
      <div>
        <h2>Count Two - {countTwo}</h2>
        <button type="button" onClick={() => dispatchTwo('increment')}>
          Increment
        </button>
        <button type="button" onClick={() => dispatchTwo('decrement')}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatchTwo('reset')}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterThree;
