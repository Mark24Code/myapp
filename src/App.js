import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  List from './List.js';
import Clock from './Clock.js';
import Calculator from './Temp.js';
import UnitComp from './myState.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <List name="AABBA"></List>
        <Clock></Clock>
        <Calculator></Calculator>
        <UnitComp></UnitComp>
      </div>
    );
  }
}

export default App;
