import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}  

const AddPost: React.FC = () => {
    const [newTitle, setNewTitle] = useState("")
    const [newContent, setNewContent] = useState("")

    const postData = {
        title: newTitle,
        body: newContent,
        userId: 1,
    };

    function handleSubmit() {
        axios.post('https://jsonplaceholder.typicode.com/posts', postData, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        setNewTitle("")
        setNewContent("")
    }
    return (
        <form className='add-post-form' onSubmit={handleSubmit}>
            <div className='form-row'>
                <label htmlFor="post-title-form">Post Title</label>
                <input type="text" onChange={e => setNewTitle(e.target.value)} value={newTitle} id='post-title-form'/>
            </div>
            <div className='form-row'>
                <label htmlFor="post-content-form">Post Content</label>
                <input type="text" onChange={e => setNewContent(e.target.value)} value={newContent} id='post-content-form'/>
            </div>
            <button className='submit-button'>Post</button>
        </form>
    );
};

export default AddPost;


