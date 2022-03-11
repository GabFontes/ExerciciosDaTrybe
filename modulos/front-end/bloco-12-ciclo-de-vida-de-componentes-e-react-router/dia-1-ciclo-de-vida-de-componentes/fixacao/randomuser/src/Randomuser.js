import React, { Component } from 'react'

export default class Randomuser extends Component {
  render() {
    const { user: { name, email, age, image }} = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{age}</p>
        <img src={ image } alt={ name } />
      </div>
    )
  }
}
