import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Comment {
    postId: number;
    name: string;
    body: string;
}  

const AddComment: React.FC = () => {
    const [newName, setNewName] = useState("")
    const [newContent, setNewContent] = useState("")

    const commentData = {
        name: newName,
        body: newContent,
        postId: 1,
    };

    function handleSubmit() {
        axios.post('https://jsonplaceholder.typicode.com/posts', commentData, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        setNewName("")
        setNewContent("")
    }
    return (
        <form className='add-comment-form' onSubmit={handleSubmit}>
            <div className='form-row'>
                <label htmlFor="comment-name-form">Comment Name</label>
                <input type="text" onChange={e => setNewName(e.target.value)} value={newName} id='comment-name-form'/>
            </div>
            <div className='form-row'>
                <label htmlFor="comment-content-form">Comment Content</label>
                <input type="text" onChange={e => setNewContent(e.target.value)} value={newContent} id='comment-content-form'/>
            </div>
            <button className='submit-button'>Comment</button>
        </form>
    );
};

export default AddComment;


