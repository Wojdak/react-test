import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }

  const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
  
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => setUsers(response.data));
      }, []);

      return (
        <div>
        <h1>Users</h1>
        {users.map(user => (
            <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.username}</p>
            <p>{user.email}</p>
            {/* Add a link to navigate to comments */}
            <a href={`/todos/${user.id}`}>View Todos</a>
            </div>
        ))}
        </div>
    );

  };

  export default UsersPage;