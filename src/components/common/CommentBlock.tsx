import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import axios from 'axios';
import '../../styles/styles.css'


interface CommentBlock {
    postId: number;
}  

const CommentBlock: React.FC<CommentBlock> = ({postId}) => {
    const [comments, setComments] = useState<Comment[]>([]);
  
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => setComments(response.data));
    }, [postId]);

    const firstThree = comments.slice(0,3);

    return (
        <div className='comments-block-container'>
            {firstThree.map(comment => (
                <Comment key={comment.id} id={comment.id} name={comment.name} body={comment.body} email={comment.email}/>
            ))}
            <a href={`/comments/${postId}`}>View All Comments</a>
        </div>
    );
};

export default CommentBlock;


