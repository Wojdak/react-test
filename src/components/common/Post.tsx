import React, { useEffect, useState } from "react";
import UserThumb from "./UserThumb";
import CommentBlock from "./CommentBlock";
import '../../styles/styles.css'


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post: React.FC<Post> = ({ id, userId, title, body }) => {
  return (
    <div className="post-container" key={id}>
      <div className="post-head">
        <UserThumb id={userId} />
        <h2>{title}</h2>
      </div>
      <div className="post-body">
        <p className="post-body-content">{body}</p>
        <h5>Comments:</h5>
        <CommentBlock postId={id} />
      </div>
    </div>
  );
};

export default Post;
