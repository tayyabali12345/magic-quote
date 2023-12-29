import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeComment } from '../actions/commentActions';
import { userCommentLikes, removeCommentedUser } from '../actions/likeActions';
import { userCommentDislikes, removeCommentedDislikeUser  } from '../actions/dislikeActions';
import { useNavigate } from 'react-router-dom';

export default function AllComments({ quoteId }) {
  const allComments = useSelector((state) => state.comments.comments);
  const allUsers = useSelector((state) => state.users.users);
  const currentUser = useSelector((state) => state.users.currentUser);
  const likes = useSelector((state) => state.likes.likes);
  const dislikes = useSelector((state) => state.dislikes.dislikes);
  const nextLikesId = useSelector((state) => state.likes.nextLikeId);
  const nextDislikesId = useSelector((state) => state.dislikes.nextDislikeId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const comments = allComments.filter(comment => comment.quote_id === quoteId);

  const deleteComment = (id)=> {
    dispatch(removeComment(id));
  };

  const addLike = (id)=> {
    const objLike ={
      id: nextLikesId,
      comment_id: id,
      user_ids: [currentUser.id],
      quote_id: null,
    };

    dispatch(userCommentLikes([objLike, "comment"]));

    const usersCommentDislike = dislikes.find((dislike) => dislike.comment_id === id);
    if (usersCommentDislike) {
      dispatch(removeCommentedDislikeUser([id, currentUser.id, "comment"]));
    }

  };

  const disLike = (id)=> {
    const objDislike ={
      id: nextDislikesId,
      comment_id: id,
      user_ids: [currentUser.id],
      quote_id: null,
    };

    dispatch(userCommentDislikes([objDislike, "comment"]));

    const usersCommentLike = likes.find((like) => like.comment_id === id);
    if (usersCommentLike) {
      dispatch(removeCommentedUser([id, currentUser.id, "comment"]));
    }

  };

  const editComment = (comment)=> {
    navigate(`/edit-comment/${comment.id}`)
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Description</th>
            <th>Likes</th>
            <th>Dislikes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => {
            const user = allUsers.find((user) => user.id === comment.user_id);
            const userName = user ? user.first_name : 'Unknown User';

            const usersCommentLike = likes.find(like => like.comment_id === comment.id );
            const usersCommentDislike = dislikes.find(dislike => dislike.comment_id === comment.id );

            return (
              <tr key={comment.id}>
                <td>{userName}</td>
                <td>{comment.description}</td>
                <td>{usersCommentLike ? usersCommentLike.user_ids.length : 0}</td>
                <td>{usersCommentDislike ? usersCommentDislike.user_ids.length : 0}</td>

                <td>
                  <button className='btn'
                    onClick={() => addLike(comment.id)}
                    disabled={usersCommentLike ? usersCommentLike.user_ids.includes(currentUser.id) : false}
                  >
                    Like
                  </button>
                  <button className='btn'
                    onClick={() => disLike(comment.id)}
                    disabled={usersCommentDislike ? usersCommentDislike.user_ids.includes(currentUser.id) : false}
                  >
                    Dislike
                  </button>
                </td>

                <td>
                  {comment.user_id === currentUser.id ? (
                    <>
                      <button className='btn' onClick={() => editComment(comment)}>Edit</button>
                      <button className='btn deletebtn' onClick={() => deleteComment(comment.id)}>Delete</button>
                    </>
                  ) : (
                    ''
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

