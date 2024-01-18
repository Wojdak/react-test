import React, { useState } from "react";
import axios from "axios";
import "../../styles/styles.css";

const AddTodo: React.FC = () => {
  const [newTitle, setNewTitle] = useState("");

  const todoData = {
    userId: 1,
    title: newTitle,
    completed: false,
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
      <button className="submit-button">Add Todo</button>
    </form>
  );
};

export default AddTodo;
