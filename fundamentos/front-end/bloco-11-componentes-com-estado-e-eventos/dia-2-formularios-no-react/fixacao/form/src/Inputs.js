import React, { Component } from 'react'

class Inputs extends Component {
  render() {
    let error = undefined;
    const { name, value, handleChange, type } = this.props;

    if(value.length < 3) error = "Texto muito pequeno!"

    return (
      <label>
        <input onChange={handleChange} name={name} value={value} type={type}></input>
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default Inputs