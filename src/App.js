import React, { Component } from 'react';
import TodoContainer from './todo-container';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoContainer />
      </div>
    );
  }
}

export default App;
