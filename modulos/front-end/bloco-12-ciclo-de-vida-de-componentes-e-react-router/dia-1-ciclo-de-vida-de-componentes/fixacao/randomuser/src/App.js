import React, { Component } from 'react'
import Loading from './Loading';
import Randomuser from './Randomuser';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch('https://api.randomuser.me/')
      .then(response => response.json())
      .then(data => {console.log(data.results);
        this.setState({
           results: data.results,
           loading: false,
        })
      })
  }

  // shouldComponentUpdate(_nextProps, nextState) {
  //   // console.log(nextState);
  //   const AGE = 50;
  //   if (nextState.person[0].dob.age > AGE) {
  //     return false;
  //   }
  //   return true;
  // }

  userInfo(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    }
  }

  render() {
    const {
      results,
      loading,
    } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        {results.map((person, index) => (
          <Randomuser key={index} user= { this.userInfo(person) } />
        ))}
      </div>
    )
  }
}
