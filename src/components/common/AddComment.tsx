import React, { useState } from "react";
import axios from "axios";
import  "../../styles/styles.css";

const AddComment: React.FC = () => {
  const [newName, setNewName] = useState("");
  const [newContent, setNewContent] = useState("");

  const commentData = {
    name: newName,
    body: newContent,
    postId: 1,
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/comments", commentData, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log("Post successful:", response.data);
        alert(`Comment successful! Name: ${newName}, Content: ${newContent}`);
      })
      .finally(() => {
        setNewName("");
        setNewContent("");
      });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="comment-name-form">Comment Name</label>
        <input
          type="text"
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
          id="comment-name-form"
        />
      </div>
      <div className="form-row">
        <label htmlFor="comment-content-form">Comment Content</label>
        <input
          type="text"
          onChange={(e) => setNewContent(e.target.value)}
          value={newContent}
          id="comment-content-form"
        />
      </div>
      <button className="submit-button">Comment</button>
    </form>
  );
};

export default AddComment;
