import React, { useEffect, useState } from 'react';
import UserThumb from './UserThumb';
import axios from 'axios';

interface AlbumThumb {
    userId: number;
    id: number;
    title: string;
}

interface PhotoThumb {
    id: number;
    albumId: number;
    thumbnailUrl: string;
}

const AlbumThumb: React.FC<AlbumThumb> = ({id, userId, title}) => {
    const [photoThumbs, setPhotoThumbs] = useState<PhotoThumb[]>([]);


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            .then(response => setPhotoThumbs(response.data));
    }, []);


    const firstThumbs = photoThumbs.slice(0, 4);

    return (
        <div className="post-body" key={id}>
            <UserThumb id={userId}/>
            <a href={`/photos/${id}`}><h2>{title}</h2></a>
            <div className="photo-thumbs">
                {firstThumbs.map(image => (
                    <img key={image.id} src={image.thumbnailUrl} alt="Photo Thumbnail"/>
                ))}
            </div>
            </div>
    );
};

export default AlbumThumb;


