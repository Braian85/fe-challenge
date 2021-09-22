import React from 'react'
import { useEffect } from 'react';
import "./Post.css";
import { useDispatch} from 'react-redux';
import {addComment} from '../../../src/redux/slices/chatSlices';
import axios from 'axios';
import Post from './Post';

import {useState} from 'react'

function PostContainer({post}) {
   const dispatch = useDispatch(); 
  const [activatedComments, setActivatedComments] = useState(false);
  console.log("activatedComments", activatedComments);
  
  useEffect(() => {
    if(activatedComments)  {
      axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
      .then( res => {
        
        res.data.forEach((fe) => 
        dispatch(addComment({
          postId: post.id,
          comment: {
            name: fe.name, 
            email: fe.email,
            body: fe.body
          }
        }))  
        )
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
      //I would disable the loading comments spinner here. 
      })

    }
  }, [activatedComments, dispatch, post.id])

   
  function internalAddComment(e) {
    
      dispatch(addComment({
        postId: post.id,
        comment: {
          name: "Braian", 
          email: "braian@gmail.com",
          body: e.target.value
        }
      })); 
     
    
  }

  return (
       <Post post={post} setActivatedComments = {setActivatedComments} activatedComments = {activatedComments} addComment={addComment} internalAddComment = {internalAddComment} />
      )
}

export default PostContainer