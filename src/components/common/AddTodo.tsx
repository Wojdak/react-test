import React, { useState } from "react";
import axios from "axios";
import "../../styles/styles.css";

const AddTodo: React.FC = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newCompleted, setNewCompleted] = useState(false);

  const todoData = {
    userId: 1,
    title: newTitle,
    completed: newCompleted,
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/todos", todoData, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log("Post successful:", response.data);
        alert(`Todo added successfully! Title: ${newTitle}`);
      })
      .finally(() => {
        setNewTitle("");
        setNewCompleted(false);
      });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="todo-title-form">Todo Title</label>
        <input
          type="text"
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          id="todo-title-form"
        />
      </div>
      <div className="form-row checkbox-row">
        <label htmlFor="todo-completed-form">Completed</label>
        <input
          type="checkbox"
          onChange={() => setNewCompleted(!newCompleted)}
          checked={newCompleted}
          id="todo-completed-form"
        />
      </div>
      <button className="submit-button">Add Todo</button>
    </form>
  );
};

export default AddTodo;
