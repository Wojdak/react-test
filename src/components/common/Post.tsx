import React, { useEffect, useState } from 'react';
import UserThumb from './UserThumb';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}  

const Post: React.FC<Post> = ({id, userId, title, body}) => {
    return (
        <div className="post-body" key={id}>
            <UserThumb id={userId}/>
            <h2>{title}</h2>
            <p>{body}</p>
            <a href={`/comments/${id}`}>View Comments</a>
            </div>
    );
};

export default Post;


