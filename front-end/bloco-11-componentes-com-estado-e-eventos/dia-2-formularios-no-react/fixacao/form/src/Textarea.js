import React, { Component } from 'react'

class Textarea extends Component {
  render() {
  const { handleChange, name, value } = this.props

  let error = undefined;
  if (value.length > 150) error = 'Texto muito grande!';
  if (value.length < 3) error = 'Texto muito pequeno!';

    return (
      <div>
          <fieldset>
            <textarea name={name} onChange={handleChange} value={value} />
            <span>{error !== undefined ? error : ''}</span>
          </fieldset>
      </div>
    ) 
  }
}

export default Textarea