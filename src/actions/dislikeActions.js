import { createAction } from "@reduxjs/toolkit";

export const userCommentDislikes = createAction("dislikes/userCommentDislikes");
export const removeCommentedDislikeUser = createAction("dislikes/removeCommentedDislikeUser");
