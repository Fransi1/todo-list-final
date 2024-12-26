import React, { useState } from 'react';
import EditTodoForm from './EditTodoForm';

const TodoItem = ({ todo, onToggleComplete, onDelete, onEditTodo }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => setIsEditing(false);
  const handleSave = (id, newTitle) => {
    onEditTodo(id, newTitle);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <EditTodoForm todo={todo} onEditTodo={handleSave} onCancel={handleCancel} />
      ) : (
        <>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => onToggleComplete(todo._id, todo.completed)}
          >
            {todo.title}
          </span>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={() => onDelete(todo._id)}>Eliminar</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
