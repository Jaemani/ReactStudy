import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    return (
      <div>
        <TodoItem text='d'/>
        <TodoItem text='r'/>
        <TodoItem text='b'/>

      </div>
    );
  }
}

export default TodoItemList;