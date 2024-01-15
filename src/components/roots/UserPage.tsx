import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { isNull } from 'util';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  phone: string;
}

  const UserPage: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const [user, setUser] = useState<User>();
  
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
          .then(response => setUser(response.data));
      }, []);

      return (
        <div>
            <div key={userId}>
            <h2>{user?.username}</h2>
            <p>{user?.name}</p>
            <section>
              <p>{user?.phone}</p>
              <p>{user?.email}</p>
            </section>
            <section>
              <p>{user?.address.city}</p>
              <p>{user?.address.street}</p>
            </section>
            <a href={`/todos/${user?.id}`}>View Todos</a>
            </div>
        </div>
    );

  };

  export default UserPage;