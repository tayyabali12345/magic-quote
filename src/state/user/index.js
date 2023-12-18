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

      console.log(state.users)
    },
  },
});

export default userSlice;
