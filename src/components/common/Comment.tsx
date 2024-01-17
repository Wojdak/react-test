import React, { useEffect, useState } from "react";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const Comment: React.FC<Comment> = ({ id, name, body, email }) => {
  return (
    <div key={id} className="comment-container">
      <div className="comment-head">
        <h5>{email}</h5>
      </div>
      <div className="comment-body">
        <h6>{name}</h6>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Comment;
