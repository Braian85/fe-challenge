import React, { useEffect, useState } from "react";
import "../../styles/Post.css";
import { useDispatch } from "react-redux";
import { addComment, addComments } from "../../../src/redux/slices/chatSlices";
import axios from "axios";
import Post from "./Post";

function PostContainer({ post }) {
  const dispatch = useDispatch();
  const [activatedComments, setActivatedComments] = useState(false);

  useEffect(() => {
    if (activatedComments) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then((res) => {
          dispatch(
            addComments({
              postId: post.id,
              comments: res.data,
            })
          );
        })

        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          //I would disable the loading comments spinner here.
        });
    }
  }, [activatedComments, dispatch, post.id]);

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
