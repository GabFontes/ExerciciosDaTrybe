import React, { Component } from 'react'
import Textarea from './Textarea'
import Inputs from './Inputs'

class Form extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      textArea: '',
      select: '',
      text: '',
      number: 0,
      checkbox: false,
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <Textarea name='textArea' value ={ this.state.textArea} handleChange={this.handleChange} />
          <fieldset>
            <input type='file' name='file'></input>
            <Inputs handleChange={this.handleChange} name='text' value={this.state.text} type="text"/>
            <Inputs handleChange={this.handleChange} name='number' value={this.state.number} type="number"/>
            <Inputs handleChange={this.handleChange} name='checkbox' value={this.state.checkbox} type="checkbox"/>
          </fieldset>
          <fieldset>
            <select value={this.state.select} onChange={this.handleChange} name='select'>
              <option>a</option>
              <option>b</option>
              <option>c</option>
            </select>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form