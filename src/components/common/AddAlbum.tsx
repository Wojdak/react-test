import React, { useState } from "react";
import axios from "axios";
import "../../styles/styles.css";

const AddAlbum: React.FC = () => {
  const [newTitle, setNewTitle] = useState("");

  const albumData = {
    title: newTitle,
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/albums", albumData, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log("Post successful:", response.data);
        alert(`Album added successfully! Title: ${newTitle}`);
      })
      .finally(() => {
        setNewTitle("");
      });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
        <label htmlFor="album-title-form">Album Title</label>
        <div className="form-row">
        <input
          type="text"
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          id="album-title-form"
        />
        </div>
      <button className="submit-button">Add Album</button>
    </form>
  );
};

export default AddAlbum;
