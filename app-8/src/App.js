import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Form from './components/Form';
import Pokemon from './components/Pokemon';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      apiURL: 'https://pokeapi.co/api/v2' 
    }
  }

  getPokemon = (name) => {
    axios.get(`${this.state.apiURL}/pokemon/${name}/`)
    .then( (res) => {
      //get the name and order from the object.
      const {name, order} = res.data;

      //create a new pokemon to push to the pokemon list
      const newPokemon = {
        name: name,
        order: order
      }

      //check to make sure the pokemon is not already in the list of pokemon
      const pokemonExist = this.state.pokemon.filter( element => element.name === newPokemon.name);

      //if the pokemon already exist let the user know that they have that pokemon already.
      //if the pokemon does not exist push it onto the list
      if(pokemonExist.length >= 1) {
        console.log(`you already have ${name}`);
      } else {
        const tempPokemonList = this.state.pokemon.slice();
        tempPokemonList.push(newPokemon);
        this.setState({pokemon: tempPokemonList});
      }
    }).catch(res => {
      console.log('erro was not able to get pokemon');
    })
  }

  render() {
    const list = this.state.pokemon.map( (pokemon) => {
      return (<Pokemon 
        key={pokemon.order}
        id={pokemon.order} 
        name={pokemon.name}/>
      );
    });
    return (
      <div className="App">
        <Form runFn={this.getPokemon}/>
        {list}
      </div>
    );
  }
}

export default App;
