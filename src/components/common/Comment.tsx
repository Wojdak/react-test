import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}


const Comment: React.FC<Comment> = ({id, name, body, email}) => {
    const [user, setUser] = useState("");

    // JSON Placeholder nie posiada
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`)
            .then(response => setUser(response.data));
    }, []);

    return (
        <div key={id} className='comment'>
            <h3>{name}</h3>
            <p>{body}</p>
            <p>{email}</p>
        </div>
    );
};

export default Comment;


