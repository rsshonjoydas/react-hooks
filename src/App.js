import ClassTimer from './components/ClassTimer';
// import FocusInput from './components/FocusInput';
import Form from './components/forwardRef/Form';
import HookTimer from './components/HookTimer';

function App() {
  return (
    <div className="App">
      <h1>RS Shonjoy</h1>
      {/* <FocusInput /> <br /> */}
      <ClassTimer />
      <HookTimer /> <br />
      <Form />
    </div>
  );
}

export default App;
