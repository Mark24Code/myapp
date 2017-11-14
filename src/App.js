import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  constructor(props){
      super(props);
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}
class Butter extends Component {
  constructor(props){
      super(props);
  }

  render() {
    return (
      <div className="Butter">
        <header className="App-header">
          <h1 className="App-title">Butter</h1>
        </header>
      </div>
    );
  }
}

class App extends Component {
  constructor(props){
      super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Butter />
      </div>
    );
  }
}

export default App;
