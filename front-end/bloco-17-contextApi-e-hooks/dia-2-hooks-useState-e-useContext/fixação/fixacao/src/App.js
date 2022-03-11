import './App.css';
import ComponenteX from './components/ComponenteX';
import Provider from './context/ContextProvider';

function App() {
  return (
    <Provider>
      <ComponenteX />
    </Provider>
  );
}

export default App;
