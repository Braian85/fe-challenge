import React, { useEffect, useState } from "react";
import "./Post.css";
import { useDispatch } from "react-redux";
import { addComment } from "../../../src/redux/slices/chatSlices";
import axios from "axios";
import Post from "./Post";

function PostContainer({ post }) {
  const dispatch = useDispatch();
  const [activatedComments, setActivatedComments] = useState(false);
  const [newComments, setNewComments] = useState([]);
  const [postId, setPostId] = useState(0); 
  
  useEffect(() => {
    if (activatedComments) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then((res) => {
          res.data.forEach((fe) =>
            dispatch(
              addComment({
                postId: post.id,
                comment: {
                  name: fe.name,
                  email: fe.email,
                  body: fe.body,
                },
              })
            )
          );
        })
        //Here the localStorage comments are added to Store. 
/*         .then( 
             console.log("localStorage: ",JSON.parse(localStorage.getItem(postId.toString())))
             ,
            JSON.parse(localStorage.getItem(postId.toString())).map(v => 

              dispatch(
                addComment({
                  postId: postId.toString(),
                  comment: {
                    name: "Braian",
                    email: "braian@gmail.com",
                    body: v},
                  }
                )
              )
            ) 
        ) */
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          //I would disable the loading comments spinner here.
        });
    }
  }, [activatedComments, dispatch, post.id]);

/*   useEffect(() => {
    console.log("newComments: ", newComments);
    localStorage.setItem(postId, JSON.stringify(newComments));
  },[newComments, postId]); */

  function internalAddComment(e, id) {
    if (e.key === "Enter") {
      if (e.target.value) {
        dispatch(
          addComment({
            postId: post.id,
            comment: {
              name: "Braian",
              email: "braian@gmail.com",
              body: e.target.value,
            },
          })
        );
        setPostId(e.target.getAttribute('commentId'));
        setNewComments([...newComments, e.target.value ]);
        console.log('id: ', e.target.getAttribute('commentId'));
        e.target.value = "";
      }
      
    }
  }

  return (
    <Post
      post={post}
      setActivatedComments={setActivatedComments}
      activatedComments={activatedComments}
      addComment={addComment}
      internalAddComment={internalAddComment}
    />
  );
}

export default PostContainer;
