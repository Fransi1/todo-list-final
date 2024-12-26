import React, { useState } from 'react';

const EditTodoForm = ({ todo, onEditTodo, onCancel }) => {
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditTodo(todo._id, newTitle);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Editar tarea"
      />
      <button type="submit">Guardar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
};

export default EditTodoForm;
