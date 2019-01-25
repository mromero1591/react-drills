import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Components/Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url='https://via.placeholder.com/150'/>
        <Image url='https://via.placeholder.com/500'/>
      </div>
    );
  }
}

export default App;
