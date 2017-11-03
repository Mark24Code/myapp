import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  {List,Todo} from './List.js';
import Clock from './Clock.js';

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
        <Todo tname="9999999"></Todo>
        <Clock></Clock>
      </div>
    );
  }
}

export default App;
