import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonName: ''
        }
    }

    handlePokemonName = (value) => {
        this.setState({pokemonName: value});
    }

    getPokemon = () => {
        let pokemonName = this.state.pokemonName;
        this.props.runFn(pokemonName);
    }

    render() {
    return (
      <div>
        <input placeholder='Enter Pokemon Name...' 
            value={this.state.pokemonName} 
            onChange={ (e) => {this.handlePokemonName(e.target.value)}}/>

        <button onClick={this.getPokemon}>Get Pokemon</button>
      </div>
    )
  }
}
