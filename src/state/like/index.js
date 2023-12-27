import { createSlice } from "@reduxjs/toolkit";
import likes from "../../schemas/like";

const initialState = {
  likes: likes,
  nextLikeId: 7,
};

const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    userCommentLikes: (state, action) => {
      const key = action.payload[1] === "quote" ? "quote_id" : "comment_id";

      const existingLikeIndex = state.likes.findIndex(
        (like) => like[key] === action.payload[0][key]
      );

      if (existingLikeIndex !== -1) {
        state.likes[existingLikeIndex] = {
          ...state.likes[existingLikeIndex],
          user_ids: [
            ...state.likes[existingLikeIndex].user_ids,
            action.payload[0].user_ids[0],
          ],
        };
      } else {
        state.likes = [...state.likes, action.payload[0]]
        state.nextLikeId ++;
      }
    },

    removeCommentedUser: (state, action) => {
      const key = action.payload[2] === "quote" ? "quote_id" : "comment_id";
      const existingLikeIndex = state.likes.findIndex(
        (like) => like[key] === action.payload[0]
      );

      if (existingLikeIndex !== -1) {
        state.likes[existingLikeIndex] = {
          ...state.likes[existingLikeIndex],
          user_ids: state.likes[existingLikeIndex].user_ids.filter(
            (userId) => userId !== action.payload[1]
          ),
        };
      }
    },

  },
});

export default likeSlice;
