const AddTodoForm = ({ onAddTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = e.target.elements.todoInput.value.trim();
    if (newTodo) {
      onAddTodo(newTodo);
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todoInput" placeholder="Nueva tarea" />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddTodoForm;
