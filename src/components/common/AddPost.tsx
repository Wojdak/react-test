import React, {useState } from "react";
import axios from "axios";
import  "../../styles/styles.css";

const AddPost: React.FC = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const postData = {
    title: newTitle,
    body: newContent,
    userId: 1,
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/posts", postData, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log("Post successful:", response.data);
        alert(`Post successful! Title: ${newTitle}, Content: ${newContent}`);
      })
      .finally(() => {
        setNewTitle("");
        setNewContent("");
      });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="post-title-form">Post Title</label>
        <input
          type="text"
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          id="post-title-form"
        />
      </div>
      <div className="form-row">
        <label htmlFor="post-content-form">Post Content</label>
        <input
          type="text"
          onChange={(e) => setNewContent(e.target.value)}
          value={newContent}
          id="post-content-form"
        />
      </div>
      <button className="submit-button" type="submit">
        Post
      </button>
    </form>
  );
};

export default AddPost;
