import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Photo from "../common/Photo";
import "../../styles/styles.css";

const PhotosPage: React.FC = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => setPhotos(response.data));
  }, []);

  return (
    <div>
      <h1 className="center">Photos</h1>
      <div className="photo-gallery">
        {photos.map((photo) => (
          <Photo
            key={photo.id}
            id={photo.id}
            title={photo.title}
            url={photo.url}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotosPage;
