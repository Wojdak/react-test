import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }

  const PhotosPage: React.FC = () => {
    const { albumId } = useParams<{ albumId: string }>();
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
          .then(response => setPhotos(response.data));
      }, []);

      return (
        <div>
          <h1>Photos</h1>
          {photos.map(photo => (
            <div key={photo.id}>
              <h3>{photo.title}</h3>
              <p>{photo.url}</p>
              <p>{photo.thumbnailUrl}</p>
            </div>
          ))}
        </div>
      );
  };
  
  export default PhotosPage;