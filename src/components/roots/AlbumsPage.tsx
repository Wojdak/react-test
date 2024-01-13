import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Album {
    userId: number;
    id: number;
    title: string;
  }

const AlbumsPage: React.FC = () => {
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
          .then(response => setAlbums(response.data));
      }, []);

      return (
        <div>
          <h1>Albums</h1>
          {albums.map(album => (
            <div key={album.id}>
              <h3>{album.title}</h3>
              <a href={`/photos/${album.id}`}>View Photos</a>
            </div>
          ))}
        </div>
      );
  };
  
  export default AlbumsPage;