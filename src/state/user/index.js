import { createSlice } from "@reduxjs/toolkit";
import users from "../../schemas/user";

const initialState = {
  users: users,
  nextUserId: 4,
  currentUser: null
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    resetState: (state) => {
      state.users = users;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      state.nextUserId ++;
    },
    editCurrentUser: (state, action) => {
      const updatedUser = { ...state.currentUser, ...action.payload }
      state.currentUser = updatedUser;

      state.users = state.users.map(user =>
        user.id === updatedUser.id ? updatedUser : user
      );
    },

    clearUserData: (state, action) => {
      state.currentUser = null;
    },

    followUser: (state, action) => {
      const existingLikeIndex = state.users.findIndex(
        (user) => user.id === action.payload[1]
      );
      
      if (existingLikeIndex !== -1) {
        state.users[existingLikeIndex] = {
          ...state.users[existingLikeIndex],
          following_ids: [
            ...state.users[existingLikeIndex].following_ids,
            action.payload[0]
          ],
        };
      }

      state.currentUser = state.users[existingLikeIndex];
    },



  },
});

export default userSlice;
