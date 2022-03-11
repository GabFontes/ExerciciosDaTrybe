import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()

    this.handlechange = this.handlechange.bind(this);
    this.handlechangeUpperCase = this.handlechangeUpperCase.bind(this);
    // this.removeSpecialCharacters = this.removeSpecialCharacters.bind(this)

    this.state = {
      nome: '',
      email: '',
      CPF: '',
      endereço: '',
      cidade: '',
    }
  }

  handlechangeUpperCase({ target }) {
    const { value } = target;

    this.setState({
      nome: value.toUpperCase(),
    })
  }

  handlechange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }



  // removeSpecialCharacters({ target }) {
  //   let { value } = target;
    

  //   //JavaScript: Como Substituir ou Remover Caracteres Especiais - Referência: https://metring.com.br/javascript-substituir-caracteres-especiais
  //   const parsed = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  //   .replace(/([^\w]+|\s+)/g, '-')
  //   .replace(/\-\-+/g, '-')
  //   .replace(/(^-+|-+$)/, '');

  //   this.setState({
  //     enderelo: parsed,
  //   })
  //   console.log(this.state.endereço)
  // }

  numberChecker({ target }) {
    const { value } = target;

    if (value.startsWith(, 0)) console.log('s');
  }

  render() {
    return (
      <fieldset>
        <label>
          Nome:
          <input type='text' name='nome' maxLength='40' onChange={this.handlechangeUpperCase} value={this.state.texto} required />
        </label>
        <label>
          Email:
          <input type='email' name='email' maxLength='40' onChange={this.handlechange} value={this.state.email} required />
        </label>
        <label>
          CPF:
          <input type='text' name='CPF' maxLength='11' onChange={this.handlechange} value={this.state.CPF} required />
        </label>
        {/* <label>
          Endereço:
          <input type='text' name='endereço' maxLength='200' onChange={this.removeSpecialCharacters} value={this.state.endereço} required />
        </label> */}
        <label>
          Cidade:
          <input type='text' name='cidade' maxLength='28' onBlur={this.numberChecker} onChange={this.handlechange} value={this.state.cidade} required />
        </label>
      </fieldset>
    )
  }
}

export default App