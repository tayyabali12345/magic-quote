import { createSlice } from "@reduxjs/toolkit";
import tags from "../../schemas/tag";

const initialState = {
  tags: tags,
  nexttagId: 4,
};

const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    userTags: (state, action) => {
      const [tagId, userIdToAdd] = action.payload;
      const tagToUpdate = state.tags.find(tag => tag.id === tagId);

      if (tagToUpdate) {
        tagToUpdate.followed_user_ids.push(userIdToAdd);
      }
    },
    removeTags: (state, action) => {
      const [tagId, userIdToRemove] = action.payload;
      const tagToUpdate = state.tags.find(tag => tag.id === tagId);

      if (tagToUpdate) {


        tagToUpdate.followed_user_ids = tagToUpdate.followed_user_ids.filter(
          id => id !== userIdToRemove
        );
      }
    },

    deleteTag: (state, action) => {
      state.tags = state.tags.filter((tag) => tag.id !== action.payload);
      state.nexttagId --;
    },
  },
});

export default tagSlice;
