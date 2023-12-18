import { createAction } from "@reduxjs/toolkit";

export const resetState = createAction("users/resetState");
export const addUser = createAction("users/addUser");
export const setCurrentUser = createAction("users/setCurrentUser");
export const editCurrentUser = createAction("users/editCurrentUser");
