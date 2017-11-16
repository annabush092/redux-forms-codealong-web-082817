import React, { Component } from 'react';
import Todo from './Todo.js'

class TodoList extends Component {

  render() {

    const todos = this.props.store.getState().todos.map((todo, index) => {
      return <Todo key={index} text={todo}/>
    });

    return(
      <ul>
        {todos}
      </ul>
    );
  }
};

export default TodoList;
