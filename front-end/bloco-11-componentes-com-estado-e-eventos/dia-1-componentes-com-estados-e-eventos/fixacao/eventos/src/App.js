import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.clickCounter = this.clickCounter.bind(this)
    this.dbClickB = this.dbClickB.bind(this)
    this.onPointerOverC = this.onPointerOverC.bind(this)


    this.state = {
      numeroDeCliquesA: 0,
      numeroDeCliquesB: 0,
      numeroDeCliquesC: 0
    }
  }

  clickCounter() {
    this.setState ((estadoAnterior, _props) => ({ 
      numeroDeCliquesA: estadoAnterior.numeroDeCliquesA + 1
    }))
    console.log(`Botão 1: ${this.buttonColor(this.state.numeroDeCliquesA)}`);
  }

  dbClickB() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesB: estadoAnterior.numeroDeCliquesB + 1 
    }))
    console.log(`Botão 1: ${this.buttonColor(this.state.numeroDeCliquesB)}`);
  }

  onPointerOverC() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesC: estadoAnterior.numeroDeCliquesC + 1
    }))
    console.log(`Botão 1: ${this.buttonColor(this.state.numeroDeCliquesC)}`);
  }

  buttonColor (num) {
    return num % 2 === 0 ? 'green' : 'white'
  }

  render() {
    const { numeroDeCliquesA, numeroDeCliquesB, numeroDeCliquesC} = this.state;
    return (
      <>
        <button onClick={this.clickCounter} style={{ backgroundColor: this.buttonColor(numeroDeCliquesA) }} >On Click: {this.state.numeroDeCliquesA}</button>
        <button onDoubleClick={this.dbClickB} style={{ backgroundColor: this.buttonColor(numeroDeCliquesB) }}>Double Click: {this.state.numeroDeCliquesB}</button>
        <button onPointerOver={this.onPointerOverC} style={{ backgroundColor: this.buttonColor(numeroDeCliquesC) }}>Pointer Over: {this.state.numeroDeCliquesC}</button>
      </>
    )
  }
}

export default App;
