
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addComment } from '../actions/commentActions';

export default function NewComment({ quoteId }) {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState('');
  const currentUser = useSelector((state) => state.users.currentUser);
  const nextCommentId = useSelector((state) => state.comments.nextCommentId);

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      dispatch(
        addComment({
          id: nextCommentId,
          quote_id: quoteId,
          user_id: currentUser.id,
          description: newComment,
        })
      );
      setNewComment('');
    }
  };

  return (
    <div>
      <label>Create Comment:</label>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
}
