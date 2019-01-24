import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: ['dog','cat','brid','shark']
    }
  }


  render() {
    let animals = this.state.list.map( (element, index) => { 
      return (
        <h2 key={`${element}_${index}`} >
         {element}
        </h2>
      );
    });

    return (
      <div className="App">
        {animals}
      </div>
    );
  }
}

export default App;
