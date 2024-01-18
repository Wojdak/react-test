import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Todo from '../common/Todo';
import AddTodo from '../common/AddTodo';

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then(response => setTodos(response.data));
  }, [userId]);

  return (
    <div>
      <AddTodo/>
      <h1 className='center'>Todos</h1>
      {todos.map(todo => (
        <Todo key={todo.id} id={todo.id} userId={todo.userId} title={todo.title} completed={todo.completed} />
      ))}
    </div>
  );
};

export default TodosPage;
