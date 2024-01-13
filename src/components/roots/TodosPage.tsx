import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then(response => setTodos(response.data));
  }, [userId]);

  return (
    <div>
      <h1>Todos for User {userId}</h1>
      {todos.map(todo => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
};

export default TodosPage;
