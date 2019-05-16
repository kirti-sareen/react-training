import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

export default class Clock extends Component {
  constructor() {
    super();
  }

  render(){
    return(
      <h1>Today`s date is {this.props.date}</h1>
    );
  }
}