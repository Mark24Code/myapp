import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,Switch,Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routers from './routers';

class Books extends Component {
  constructor(props){
      super(props);
  }

  render() {
    console.log('>>>>');
    console.log(this.props.match)
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Books</h1>
        </header>
        <Link to='/'>Home</Link>
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
      </div>
    );
  }
}

export {App,Home,Books,Shelf};
