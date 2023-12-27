import { createAction } from "@reduxjs/toolkit";

export const addComment = createAction("comments/addComment");
export const updateComment = createAction("comments/updateComment");
export const removeComment = createAction("comments/removeComment");
