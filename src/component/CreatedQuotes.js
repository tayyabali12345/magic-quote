import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Comments from './comments'
import NewComment from './NewComment'
import { userCommentLikes, removeCommentedUser } from '../actions/likeActions';
import { userCommentDislikes, removeCommentedDislikeUser  } from '../actions/dislikeActions';
import { removeQuote  } from '../actions/quoteActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ShowRandomQuote = () => {
  const quotes = useSelector((state) => state.quotes.quotes);
  const tags = useSelector((state) => state.tags.tags);
  const currentUser = useSelector((state) => state.users.currentUser);
  const dispatch = useDispatch();
  const [currentQuote, setCurrentQuote] = useState(null);
  const likes = useSelector((state) => state.likes.likes);
  console.log(likes);
  const navigate = useNavigate();
  const dislikes = useSelector((state) => state.dislikes.dislikes);
  const nextLikesId = useSelector((state) => state.likes.nextLikeId);
  const nextDislikesId = useSelector((state) => state.dislikes.nextDislikeId);

  const getTagNames = (tagIds) => {
    return tagIds.map((tagId) => {
      const tag = tags.find((tag) => tag.id === tagId);
      return tag ? tag.name : '';
    });
  };

  const deleteQuote = (id)=> {
    dispatch(removeQuote(id));
  };

  const editQuote = (quote)=> {
    navigate(`/edit-quote/${quote.id}`)
  };

  const addQuoteLike = (id)=> {
    const objLike ={
      id: nextLikesId,
      comment_id: null,
      user_ids: [currentUser.id],
      quote_id: id,
    };

    dispatch(userCommentLikes([objLike, "quote"]));

    const usersQuoteDislike = dislikes.find((dislike) => dislike.quote_id === id);
    if (usersQuoteDislike) {
      dispatch(removeCommentedDislikeUser([id, currentUser.id, "quote"]));
    }

  };

  const quoteDisLike = (id)=> {
    const objDislike ={
      id: nextDislikesId,
      comment_id: null,
      user_ids: [currentUser.id],
      quote_id: id,
    };

    dispatch(userCommentDislikes([objDislike, "quote"]));

    const usersCommentLike = likes.find((like) => like.comment_id === id);
    if (usersCommentLike) {

      dispatch(removeCommentedUser([id, currentUser.id, "quote"]));
    }

  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }, [quotes]);

  if (!currentQuote) {
    return <div>No quotes available.</div>;
  }

  const usersQuoteLike = likes.find(like => like.quote_id === currentQuote.id );
  const usersQuoteDislike = dislikes.find(dislike => dislike.quote_id === currentQuote.id );

  return (
    <div>
      <h2>Random Quote</h2>
      <p>Author: {currentQuote.author}</p>
      <p>Quote: {currentQuote.description}</p>
      <p>Date: {new Date(currentQuote.date).toLocaleDateString()}</p>
      <p>Time: {new Date(currentQuote.date).toLocaleTimeString()}</p>
      <p>Tags: {getTagNames(currentQuote.tag_ids).join(', ')}</p>

      <p>{usersQuoteLike ? usersQuoteLike.user_ids.length : 'N/A'}</p>
      <p>{usersQuoteDislike ? usersQuoteDislike.user_ids.length : 'N/A'}</p>

      {currentQuote.user_id === currentUser.id ? (
                    <>
                      <button onClick={() => editQuote(currentQuote)}>Edit</button>
                      <button onClick={() => deleteQuote(currentQuote.id)}>Delete</button>
                    </>
                  ) : (
                    'N/A'
      )}

      <button
        onClick={() => addQuoteLike(currentQuote.id)}
        disabled={usersQuoteLike ? usersQuoteLike.user_ids.includes(currentUser.id) : false}
      >
        Like
      </button>
      <button
        onClick={() => quoteDisLike(currentQuote.id)}
        disabled={usersQuoteDislike ? usersQuoteDislike.user_ids.includes(currentUser.id) : false}
      >
        Dislike
      </button>

      <br/>
      <Comments quoteId={currentQuote.id} />
      <NewComment quoteId={currentQuote.id} ></NewComment>
    </div>
  );
};

export default ShowRandomQuote;

