/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
// import CounterThree from './components/ConunterThree';
// import CounterOne from './components/CounterOne';
// import CounterTwo from './components/CounterTwo';

import React, { useReducer } from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

export const CountContext = React.createContext();

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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div className="App">
        <h1>RS Shonjoy</h1>
        {/* <CounterOne />
        <br />
        <CounterTwo /> <br />
        <CounterThree /> */}
        <h2>Count - {count} </h2>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
