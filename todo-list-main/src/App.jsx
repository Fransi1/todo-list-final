import React, { useState, useEffect } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import { getTodos, createTodo, updateTodo, deleteTodo } from './services/api';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const handleAddTodo = async (newTodo) => {
    const createdTodo = await createTodo(newTodo);
    setTodos([...todos, createdTodo]);
  };

  const handleToggleComplete = async (id, completed) => {
    const updatedTodo = await updateTodo(id, { completed: !completed });
    setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)));
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const handleEditTodo = async (id, newTitle) => {
    const updatedTodo = await updateTodo(id, { title: newTitle });
    setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)));
  };

  return (
    <div>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDelete}
        onEditTodo={handleEditTodo}
      />
    </div>
  );
};

export default App;
