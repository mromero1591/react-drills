import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      filterString: '',
      pokemonList: ['pikachu', 'bulbasor', 'charmander', 'mew', 'mewTwo'],
    }
  }

  searchList = (value) => {
    this.setState({filterString: value});
  }

  render() {
    const list = this.state.pokemonList.filter( (element, index) => element.includes(this.state.filterString)).map( (element, index) => {
      return (
        <h2 key={`${element}_${index}`}>{element}</h2>
      );
    });

    return (
      <div className="App">
        <input onChange={(e) => {this.searchList(e.target.value)}} />
        {list}
      </div>
    );
  }
}

export default App;
