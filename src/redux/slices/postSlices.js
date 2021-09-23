import { createAction, createReducer } from "@reduxjs/toolkit";
export const addPosts = createAction("addPosts/post");
export const addComment = createAction("addComment/post");
export const addComments = createAction("addComments/post");
export const setPostsLoading = createAction("setPostsLoading/post");

const initialPost = {
  posts: [],
  postsLoading: true,
};

export const postSlices = createReducer(initialPost, (builder) => {
  builder.addCase(addPosts, (state, action) => {
    state.posts = action.payload.map((p) => ({ ...p, comments: [] }));
  });

  builder.addCase(addComments, (state, action) => {
    const posts = [...state.posts];
    const postIdx = state.posts.findIndex(
      (p) => p.id === action.payload.postId
    );
    posts[postIdx].comments = action.payload.comments;
    const ls = JSON.parse(localStorage.getItem(postIdx.toString()));
    if (ls) {
      posts[postIdx].comments = [...action.payload.comments, ...ls];
    }
    state.posts = posts;
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
    localStorage.setItem(postIdx, JSON.stringify(posts[postIdx].comments));
  });
  builder.addCase(setPostsLoading, (state, action) => {
    state.postsLoading = action.payload;
  });
});
