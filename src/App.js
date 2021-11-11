import React from 'react';
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <h1>RS Shonjoy</h1>
      <UserContext.Provider value="Shonjoy">
        <ChannelContext.Provider value="rsshonjoydas">
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
