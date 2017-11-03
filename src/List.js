import React, { Component } from 'react';
import './App.css';

function List(props){
  return (<h1>Heelo, {props.name}</h1>);
}

function Todo(props){
  return (<h2> TTTTTTOOOOOODOOOO {props.tname}</h2>);
}
export {List,Todo}