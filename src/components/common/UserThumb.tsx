import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
    id: number;
    username?: string;
}  

const UserThumb: React.FC<User> = ({id}) => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => setUser(response.data));
    }, []);


    return (
        <div className='user-thumb'>
            <a href={`/users/${id}`}>
                <img src="https://placehold.co/50" alt="User Profile Picture" />
                <h4>{user?.username}: </h4>
            </a>
        </div>
    );
};

export default UserThumb;



