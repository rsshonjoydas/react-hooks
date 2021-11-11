import ClassCounter from './components/ClassCounter';
import ClassCounterTwo from './components/ClassCounterTwo';
import HookCouner from './components/HookCouner';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCountertwo from './components/HookCountertwo';

function App() {
  return (
    <div className="App">
      <h1>RS Shonjoy</h1>
      <ClassCounter />
      <br />
      <HookCouner />
      <br />
      <ClassCounterTwo />
      <br />
      <HookCountertwo />
      <br />
      <HookCounterThree /> <br />
      <HookCounterFour />
    </div>
  );
}

export default App;
