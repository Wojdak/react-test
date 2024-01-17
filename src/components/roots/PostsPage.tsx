import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../common/Post';
import AddPost from '../common/AddPost';
import '../../styles/styles.css'


const PostsPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
  
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => setPosts(response.data));
    }, []);

    return (
        <div>
            <AddPost/>
            <h1 className='center'>Posts</h1>
            {posts.map(post => (
                <Post key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} />
            ))}
        </div>
    );
};
  
  export default PostsPage;