import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}  

const PostsPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
  
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => setPosts(response.data));
      }, []);


    return (
        <div>
        <h1>Posts</h1>
        {posts.map(post => (
            <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {/* Add a link to navigate to comments */}
            <a href={`/comments/${post.id}`}>View Comments</a>
            </div>
        ))}
        </div>
    );
};
  
  export default PostsPage;