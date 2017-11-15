import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { BrowserRouter, Route,Switch } from 'react-router-dom';
import { Route,Switch } from 'react-router-dom';

class Books extends Component {
  constructor(props){
      super(props);
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Books</h1>
        </header>
      </div>
    );
  }
}
class Shelf extends Component {
  constructor(props){
      super(props);
  }

  render() {
    return (
      <div className="Butter">
        <header className="App-header">
          <h1 className="App-title">Shelf</h1>
        </header>
      </div>
    );
  }
}
class Home extends Component {
  constructor(props){
      super(props);
  }

  render() {
    return (
      <div className="Home">
        <header className="App-header">
          <h1 className="App-title">Home</h1>
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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shelf" component={Shelf} />
          <Route path="/books" component={Books} />
        </Switch>
      </div>
    );
  }
}

export default App;
