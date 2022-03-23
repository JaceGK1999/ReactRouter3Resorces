import { getTodos } from '../services/FetchUtils';
import { useState, useEffect } from 'react';

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>This is all of the todos!!</h3>
      {todos.map((item) => (
        <p key={item.id}>{item.todo}</p>
      ))}
    </div>
  );
}
