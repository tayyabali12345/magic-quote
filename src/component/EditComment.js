import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addComment, updateComment  } from '../actions/commentActions';
import { useNavigate,useParams } from 'react-router-dom';


export default function EditComment() {
  const dispatch = useDispatch();
  const { comment_id } = useParams();
  const allComments = useSelector((state) => state.comments.comments);
  const foundComment = allComments.find(comment => comment.id == comment_id);
  const [comment, setComment] = useState(foundComment.description);
  const navigate = useNavigate();

  const handleCommentAction = () => {
    if (comment.trim() !== '') {
      dispatch(updateComment({ id: foundComment.id, description: comment }));
      setComment('');
      navigate('/homepage');
    }
  };

  return (
    <center>
      <label>'Edit Comment'</label>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={handleCommentAction}>
        Save Comment
      </button>
    </center>
  );
}
