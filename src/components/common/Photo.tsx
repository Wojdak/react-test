import React, { useEffect, useState } from 'react';

interface Photo {
    id: number;
    title: string;
    url: string;
}

const Photo: React.FC<Photo> = ({id, title, url}) => {
    return (
        <div key={id}>
            <h3>{title}</h3>
            <img src={url} alt="Photo" />
        </div>
    );
};

export default Photo;


