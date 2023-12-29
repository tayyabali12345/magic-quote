import { createSlice } from "@reduxjs/toolkit";
import dislikes from "../../schemas/dislike";

const initialState = {
  dislikes: dislikes,
  nextDislikeId: 7,
};

const dislikeSlice = createSlice({
  name: "dislikes",
  initialState,
  reducers: {
    userCommentDislikes: (state, action) => {

      const key = action.payload[1] === "quote" ? "quote_id" : "comment_id";

      console.log(action.payload);
      const existingDislikeIndex = state.dislikes.findIndex(
        (dislike) => dislike[key] === action.payload[0][key]
      );

      if ( existingDislikeIndex!== -1) {
        state.dislikes[ existingDislikeIndex] = {
          ...state.dislikes[existingDislikeIndex],
          user_ids: [
            ...state.dislikes[existingDislikeIndex].user_ids,
            action.payload[0].user_ids[0],
          ],
        };
      } else {
        state.dislikes = [...state.dislikes, action.payload[0]]
        state.nextDislikeId ++;
      }
    },

    removeCommentedDislikeUser: (state, action) => {

      const key = action.payload[2] === "quote" ? "quote_id" : "comment_id";


      const existingLikeIndex = state.dislikes.findIndex(
        (dislike) => dislike[key] === action.payload[0]
      );

      if (existingLikeIndex !== -1) {
        state.dislikes[existingLikeIndex] = {
          ...state.dislikes[existingLikeIndex],
          user_ids: state.dislikes[existingLikeIndex].user_ids.filter(
            (userId) => userId !== action.payload[1]
          ),
        };
      }
    },
  },
});

export default dislikeSlice;
