import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './Components/NewTask'
import List from './Components/List'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    }
  }

  handleList = (value) => {
    let tempList = this.state.todoList;
    tempList.push(value);
    this.setState({todoList: tempList});
  }

  render() {
    return (
      <div className="App">
        <h2>My Todo List</h2>
        <NewTask add={this.handleList} />
        <List list={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
