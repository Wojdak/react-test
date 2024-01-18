import React, { useState } from "react";
import axios from "axios";
import "../../styles/styles.css";

const AddPhoto: React.FC = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newThumbnailUrl, setNewThumbnailUrl] = useState("");

  const photoData = {
    albumId: 1,
    title: newTitle,
    url: newUrl,
    thumbnailUrl: newThumbnailUrl,
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/photos", photoData, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        console.log("Post successful:", response.data);
        alert(`Photo added successfully! Title: ${newTitle}`);
      })
      .finally(() => {
        setNewTitle("");
        setNewUrl("");
        setNewThumbnailUrl("");
      });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="photo-title-form">Photo Title</label>
        <input
          type="text"
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          id="photo-title-form"
        />
      </div>
      <div className="form-row">
        <label htmlFor="photo-url-form">Photo URL</label>
        <input
          type="text"
          onChange={(e) => setNewUrl(e.target.value)}
          value={newUrl}
          id="photo-url-form"
        />
      </div>
      <div className="form-row">
        <label htmlFor="photo-thumbnail-url-form">Thumbnail URL</label>
        <input
          type="text"
          onChange={(e) => setNewThumbnailUrl(e.target.value)}
          value={newThumbnailUrl}
          id="photo-thumbnail-url-form"
        />
      </div>
      <button className="submit-button">Add Photo</button>
    </form>
  );
};

export default AddPhoto;
