import {createAction, createReducer} from '@reduxjs/toolkit';
export const addPosts = createAction("addPosts/post");
export const addComment = createAction("addComment/post");
export const setPostsLoading = createAction("setPostsLoading/post");

const initialChat = {
    posts: [],
    postsLoading: false
    }

export const chatSlices = createReducer(initialChat, builder => {
    builder.addCase(addPosts, (state, action) => {
        state.posts = action.payload.map((p) => ({...p, comments:[] }) );
        console.log("action: ", action)
    })
    builder.addCase(addComment, (state, action) => {
        // fid array postId
        const posts = [...state.posts]
        const postIdx = state.posts.findIndex((p) => p.id === action.payload.postId) 

        console.log("Reducer log:", state)
        
        //En vez de agregar un string agregar un objeto que tenga name, email, body. 
        console.log('>>>', postIdx) 
        posts[postIdx].comments = [...posts[postIdx].comments, action.payload.comment]
        
        state.posts = posts;

    })
    builder.addCase(setPostsLoading, (state, action) => {
        state.postsLoading = action.payload;
    })

})




