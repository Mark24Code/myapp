import React, { Component } from 'react';
import './App.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ListName:9999
    }
  }

  render() {
    return (
      <div>
        <h1>New List</h1>
        <h2>It is {this.state.ListName}.</h2>
      </div>
    );
  }
}


function Todo(props){
  return (<h2> TTTTTTOOOOOODOOOO {props.tname}</h2>);
}
export {List,Todo}