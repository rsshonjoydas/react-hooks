import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <h1>RS Shonjoy</h1>
      <DocTitleOne />
      <DocTitleTwo />
      <CounterOne />
      <CounterTwo />
      <br />
      <UserForm />
    </div>
  );
}

export default App;
