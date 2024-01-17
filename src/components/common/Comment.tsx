import React, { useEffect, useState } from 'react';

interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}

const Comment: React.FC<Comment> = ({id, name, body, email}) => {
    return (
        <div key={id} className='comment'>
            <h3>{name}</h3>
            <p>{body}</p>
            <p>{email}</p>
        </div>
    );
};

export default Comment;


