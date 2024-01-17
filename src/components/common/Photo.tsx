import React, { useEffect, useState } from "react";
import "../../styles/styles.css";

interface Photo {
  id: number;
  title: string;
  url: string;
}

const Photo: React.FC<Photo> = ({ id, title, url }) => {
  return (
      <div className="photo-item" key={id}>
        <img src={url} alt="Photo" />
        <h3>{title}</h3>
      </div>
  );
};

export default Photo;
