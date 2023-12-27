const likes = [
  {
    id: 1,
    quote_id: 1,
    comment_id: null,
    user_ids: [1, 2, 3]
  },
  {
    id: 2,
    quote_id: 2,
    comment_id: null,
    user_ids: [2]
  },
  {
    id: 3,
    quote_id: null,
    comment_id: 2,
    user_ids: [2]
  },

  {
    id: 4,
    quote_id: null,
    comment_id: 1,
    user_ids: [3, 1, 2]
  },
  {
    id: 5,
    quote_id: null,
    comment_id: 2,
    user_ids: [3, 1, 2]
  },
  {
    id: 6,
    quote_id: null,
    comment_id: 3,
    user_ids: [3, 1, 2]
  },


];

export default likes;
