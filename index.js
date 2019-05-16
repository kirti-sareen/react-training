import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Clock from './Clock'
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      date: '16-05-2019'
    };
  }
// create clock component.
// clock has date
// date is in the state
// dislay date in view
  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Clock date={this.state.date}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
