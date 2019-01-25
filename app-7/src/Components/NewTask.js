import React, { Component } from 'react'

export default class NewTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoInput: ''
        }
    }

    handleUserInput = (value) => {
        this.setState({todoInput: value})
    }

    handleAdd = () => {
        this.props.add(this.state.todoInput);
        this.setState({todoInput: ' '});
    }

    render() {
        return (
            <div>
                <input value={this.state.todoInput} onChange={ (e) => {this.handleUserInput(e.target.value)}} /> 
                <button onClick={this.handleAdd} >Add</button>      
            </div>
        )
  }
}
