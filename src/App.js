import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  List from './List.js';
import Clock from './Clock.js';
import Calculator from './Temp.js';
import UnitComp from './myState.js';
import NameForm from './NameForm.js';
import Reservation from './Reservation.js';
import Inheritance from './Inheritance.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Inheritance
          left={<h2>This is LEft</h2>}
          right={<h4>rrrrright</h4>}
        >
          <p>888888</p>
        </Inheritance>
        <div>==========================</div>
        <NameForm></NameForm>
        <UnitComp></UnitComp>
        <Calculator></Calculator>
        <Clock></Clock>
        <Reservation></Reservation>
        <List name="AABBA"></List>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
