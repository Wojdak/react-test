import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { isNull } from "util";

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
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => setUser(response.data));
  }, []);

  return (
    <div className="user-info">
      <h2>{user?.username}</h2>

      <section>
        <label>Email:</label>
        <p>{user?.email}</p>
      </section>

      <section>
        <label>Phone:</label>
        <p>{user?.phone}</p>
      </section>

      <section>
        <label>City:</label>
        <p>{user?.address.city}</p>
      </section>

      <section>
        <label>Street:</label>
        <p>{user?.address.street}</p>
      </section>

      <section className="links">
        <a href={`/todos/${user?.id}`}>View Posts</a>
        <a href={`/todos/${user?.id}`}>View Albums</a>
        <a href={`/todos/${user?.id}`}>View Todos</a>
      </section>
    </div>
  );
};

export default UserPage;
