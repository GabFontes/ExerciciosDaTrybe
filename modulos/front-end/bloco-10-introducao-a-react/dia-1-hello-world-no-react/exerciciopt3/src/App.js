import Content from './Content';
import Header from './Header';
import React from 'react';
import Footer from './Footer';
import './App.css'

class App extends React.Component{
  render() {
    return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>);
  }
}

export default App;
