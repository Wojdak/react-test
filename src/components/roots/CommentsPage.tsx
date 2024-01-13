import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }

const Comments: React.FC = () => {
    const { postId } = useParams<{ postId: string }>();
    const [comments, setComments] = useState<Comment[]>([]);
  
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => setComments(response.data));
    }, [postId]);
  
    return (
      <div>
        <h1>Comments</h1>
        {comments.map(comment => (
          <div key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Comments;