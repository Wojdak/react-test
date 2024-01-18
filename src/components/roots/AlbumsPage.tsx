import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlbumThumb from '../common/AlbumThumb';
import AddAlbum from '../common/AddAlbum';


const AlbumsPage: React.FC = () => {
    const [albums, setAlbums] = useState<AlbumThumb[]>([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
          .then(response => setAlbums(response.data));
      }, []);

      return (
        <div>
          <AddAlbum />
          <h1 className='center'>Albums</h1>
          {albums.map(album => (
            <AlbumThumb key={album.id} id={album.id} userId={album.userId} title={album.title}/>
          ))}
        </div>
      );
  };
  
  export default AlbumsPage;