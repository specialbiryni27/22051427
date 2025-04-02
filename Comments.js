import React, { useState, useEffect } from 'react';

function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch(
          `http://20.244.56.144/evaluation-service/posts/${postId}/comments`,
          {
            headers: {
              Authorization: 'Bearer YOUR_ACTUAL_TOKEN' // Replace YOUR_ACTUAL_TOKEN
            }
          }
        );
        
      } catch (err) {
        // ... error handling
      }
    }
    // ...
  }, [postId]);

  if (loading) {
    return <p>Loading comments...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Comments for Post {postId}</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p><strong>ID:</strong> {comment.id}</p>
            <p><strong>Content:</strong> {comment.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;