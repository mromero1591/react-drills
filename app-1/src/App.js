import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputText: ''
    }
  }

  //upate input text state
  updateUserInput = (value) => {
    this.setState({inputText: value});
  }

  render() {
    return (
      <div className="App">
        <input value={this.state.inputText} onChange={(e) => { this.updateUserInput(e.target.value) }}/>
        <p>{this.state.inputText}</p>
      </div>
    );
  }
}

export default App;
