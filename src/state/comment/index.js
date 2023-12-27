import { createSlice } from "@reduxjs/toolkit";
import comments from "../../schemas/comment";

const initialState = {
  comments: comments,
  nextCommentId: 4,
};

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments = [...state.comments, action.payload]
      state.nextCommentId ++;
    },
    removeComment: (state, action) => {
      alert("Removing comment");
        state.comments = state.comments.filter(
          state => state.id !== action.payload
        );
      },
    updateComment: (state, action) => {
      const { id, description } = action.payload;
      const index = state.comments.findIndex((comment) => comment.id === id);

      if (index !== -1) {
        state.comments[index].description = description;
      }
    },
    },
  },
);

export default commentSlice;
