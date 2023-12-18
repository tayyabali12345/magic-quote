import { combineReducers } from "redux";
import userSlice from "../state/user/index";
import quoteSlice from "../state/quote/index";
import tagSlice from "../state/tag/index";
import commentSlice from "../state/comment/index";
import likeSlice from "../state/like/index";
import dislikeSlice from "../state/dislike/index";

const RootReducer = combineReducers({
  users: userSlice.reducer,
  quotes: quoteSlice.reducer,
  tags: tagSlice.reducer,
  comments: commentSlice.reducer,
  likes: likeSlice.reducer,
  dislikes: dislikeSlice.reducer,
});

export default RootReducer;
