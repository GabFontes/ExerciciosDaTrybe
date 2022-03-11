import React from 'react'
import './App.css';

const arr = ['estudar', 'jogar vava'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return (<ul>{arr.map((element) => Task(element))}</ul>);
  }
}

export default App;
