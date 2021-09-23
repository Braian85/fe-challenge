import { createAction, createReducer } from "@reduxjs/toolkit";
export const addPosts = createAction("addPosts/post");
export const addComment = createAction("addComment/post");
export const setPostsLoading = createAction("setPostsLoading/post");

const initialChat = {
  posts: [],
  postsLoading: false,
};

export const chatSlices = createReducer(initialChat, (builder) => {
  builder.addCase(addPosts, (state, action) => {
    state.posts = action.payload.map((p) => ({ ...p, comments: [] }));
  });
  builder.addCase(addComment, (state, action) => {
    const posts = [...state.posts];
    const postIdx = state.posts.findIndex(
      (p) => p.id === action.payload.postId
    );
    posts[postIdx].comments = [
      ...posts[postIdx].comments,
      action.payload.comment,
    ];
    state.posts = posts;
    //  localStorage.setItem(postIdx,JSON.stringify([...posts[postIdx].comments, action.payload.comment]));
    localStorage.setItem(postIdx,JSON.stringify(state));

    

  });
  builder.addCase(setPostsLoading, (state, action) => {
    state.postsLoading = action.payload;
  });
});
