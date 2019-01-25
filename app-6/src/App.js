import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo'

class App extends Component {

  constructor() {
    super();

    this.state = {
      todoList: [],
      userInput: ''
    }
  }

  handleUserInput = (value) => {
    this.setState({userInput: value});
  }

  updateTodoList = () => {
    //create varibale for the temp state
    let tempTodoList = this.state.todoList;
    let tempInput = this.state.userInput;

    //push the input into the temp todo state.
    tempTodoList.push(tempInput);

    //update the componenets state.
    this.setState({
      todoList: tempTodoList,
      userInput: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h2>My Todo List</h2>
        <input value={this.state.userInput} onChange= {(e) => {this.handleUserInput(e.target.value)}}/>
        <button onClick={this.updateTodoList}>Add todo</button>
        <Todo list={this.state.todoList} />
      </div>
    );
  }
}

export default App;
