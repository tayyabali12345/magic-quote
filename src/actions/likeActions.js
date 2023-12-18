import { createAction } from "@reduxjs/toolkit";

export const userCommentLikes = createAction("likes/userCommentLikes");
export const removeCommentedUser = createAction("likes/removeCommentedUser");
