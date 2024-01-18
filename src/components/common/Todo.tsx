import React, { useEffect, useState } from "react";
import UserThumb from "./UserThumb";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todo: React.FC<Todo> = ({ id, userId, title, completed }) => {
  return (
    <div className="todo-item" key={id}>
      <div className={completed ? "completed" : "not-completed"}></div>
      <div className="todo-item-head">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Todo;
