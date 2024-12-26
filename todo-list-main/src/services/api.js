const API_URL = 'http://localhost:5000/api';

export const getTodos = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  return response.json();
};

export const createTodo = async (todo) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: todo }),
  });
  return response.json();
};

export const updateTodo = async (id, updates) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  return response.json();
};

export const deleteTodo = async (id) => {
  await fetch(`${API_URL}/tasks/${id}`, { method: 'DELETE' });
};
