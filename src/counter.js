import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { createStore } from 'redux';
// import { Provider } from 'react-redux'
let counterReducer = (state=14,action)=>{
  switch (action.type) {
    case 'INCREMENT':
      console.log('INCREMENT+1')
      return state + 1
    case 'DECREMENT':
      console.log('DECREMENT-1')
      return state - 1
    default:
      return state
  }
}

let store = createStore(counterReducer);


class Counter extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment(){
    store.dispatch({type:"INCREMENT"})
    console.log('+1')
    console.log(store.getState())
  }
  decrement(){
    store.dispatch({type:"DECREMENT"})
    console.log('-1')
    console.log(store.getState())
  }
  render() {
    let value = store.getState();
    store.subscribe(()=>{
      value = store.getState()
    })
    return (
      <div>
        <h1>Counter</h1>
        {store.getState()}
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
    )
  }
}

export {Counter,store};
