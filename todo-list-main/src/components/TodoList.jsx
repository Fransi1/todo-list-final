import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleComplete, onDelete, onEditTodo }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo._id}
        todo={todo}
        onToggleComplete={onToggleComplete}
        onDelete={onDelete}
        onEditTodo={onEditTodo}
      />
    ))}
  </ul>
);

export default TodoList;
