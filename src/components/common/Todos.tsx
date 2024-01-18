import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./Todo";

interface Todos {
  userId?: number;
}

const Todos: React.FC<Todos> = ({userId}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then((response) => setTodos(response.data));
  }, []);


  return (
      <div className="todos2">
        {todos.map((todo) => (
          <Todo id={todo.id} userId={todo.userId} title={todo.title} completed={todo.completed}/>
        ))}
      </div>
  );
};

export default Todos;
