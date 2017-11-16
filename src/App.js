import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo.js'
import TodoList from './components/todos/TodoList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo store={this.props.store} />
        <TodoList store={this.props.store} />
      </div>
    );
  }
}

export default App;
